# Despliegue en VPS de IONOS

Guía paso a paso para migrar `webbs` de Vercel a un VPS propio de IONOS con
dominio `bestronger.es`. Stack: Docker (la app) + **Caddy** en el host
(reverse proxy + TLS automático con Let's Encrypt) + GitHub Actions (CI/CD
por SSH en cada push a `main`).

> Esta VPS es **compartida**: ya aloja otros servicios (cada uno en su propio
> dominio, gestionados por Caddy). `webbs` convive con ellos sin tocar nada
> de lo existente — usa su propio puerto de host y su propio bloque de
> dominio en el Caddyfile.

Archivos relevantes ya presentes en el repo:

- `Dockerfile` — build multi-stage de Next.js en modo `standalone`.
- `docker-compose.yml` — levanta el contenedor `web`, escuchando solo en
  `127.0.0.1:3001` (puerto de host propio; ajusta el número si en tu VPS ya
  está ocupado — revisa con `docker ps -a` y `ss -tlnp` qué puertos están
  libres antes de fijarlo).
- `.github/workflows/deploy.yml` — hace `git pull` + `docker compose up -d`
  en el VPS por SSH en cada push a `main`.
- `docs/deploy/Caddyfile.bestronger` — bloque de Caddy de ejemplo para añadir
  al Caddyfile existente del VPS (no lo sustituye).

## 1. Preparar el VPS

Si la VPS ya existe y la usas para otras cosas (es el caso normal aquí),
sáltate la creación de VPS y ve directo a comprobar qué hay:

```bash
docker ps -a --format '{{.Names}}: {{.Image}} -> {{.Ports}}'
ss -tlnp | grep ':80\|:443'
```

Esto te dice qué puertos ya están ocupados (para elegir uno libre en
`docker-compose.yml`) y qué gestiona el 80/443 (en esta VPS es **Caddy**,
proceso nativo — no confundir con Nginx, que aquí ni se usa).

(Opcional) Firewall básico si aún no está activo:

```bash
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw enable
```

Esta guía asume que trabajas como `root` directamente (es el caso de esta
VPS). Si prefieres un usuario no root dedicado, créalo con `adduser` +
`usermod -aG sudo,docker` y antepón `sudo` a los comandos que lo requieran.

## 2. Instalar Docker (si no está ya)

```bash
docker version
# si no hay Server (daemon) activo:
systemctl enable --now docker
```

Si `docker` no existe en absoluto: `curl -fsSL https://get.docker.com | sh`.

## 3. Clonar el repo en el VPS

```bash
mkdir -p /srv/webbs
cd /srv/webbs
git clone git@github.com:ilzarpeatore/webbs.git .
git checkout main
```

**Autenticación con GitHub — usa una deploy key SSH, no usuario/contraseña.**
GitHub ya no acepta contraseña por HTTPS, y una autenticación interactiva
rompe cualquier automatización (GitHub Actions no puede responder un prompt).
Pasos:

```bash
ssh-keygen -t ed25519 -C "vps-deploy-webbs" -N "" -f ~/.ssh/webbs_deploy_key
cat ~/.ssh/webbs_deploy_key.pub
```

Copia esa clave pública y añádela en GitHub: repo → *Settings* → *Deploy
keys* → *Add deploy key* → pégala, **sin** marcar "Allow write access" (solo
lectura, es lo único que necesita el VPS). Luego:

```bash
cat >> ~/.ssh/config <<'EOF'
Host github.com
  IdentityFile ~/.ssh/webbs_deploy_key
  IdentitiesOnly yes
EOF
ssh -T git@github.com   # debe confirmar autenticación sin pedir nada
```

Si ya clonaste por HTTPS y te quedó pidiendo credenciales, cambia el remoto:

```bash
git remote set-url origin git@github.com:ilzarpeatore/webbs.git
git pull   # ya no debería pedir usuario/contraseña
```

Crea el archivo de variables de entorno de producción (no se versiona,
ya está en `.gitignore`):

```bash
cat > /srv/webbs/.env.production <<'EOF'
SITE_URL=https://bestronger.es
API_BASE_URL=https://testapp.bestronger.es/api
EOF
```

Primer build y arranque manual (para verificar que todo funciona antes de
automatizar):

```bash
cd /srv/webbs
docker compose build
docker compose up -d
curl -I http://127.0.0.1:3001
```

Deberías ver `HTTP/1.1 200 OK` (o un redirect a `/home`, ver
`next.config.ts`) — y **no** la respuesta de ningún otro servicio de la VPS.

## 4. DNS en IONOS: apuntar el dominio al VPS

En el panel de IONOS → *Dominios* → `bestronger.es` → *DNS*:

| Tipo | Nombre | Valor            | TTL     |
| ---- | ------ | ----------------- | ------- |
| A    | @      | TU_IP_DEL_VPS      | 1 hora  |
| A    | www    | TU_IP_DEL_VPS      | 1 hora  |

La propagación puede tardar de minutos a unas horas. Verifica con:

```bash
dig +short bestronger.es
dig +short www.bestronger.es
```

## 5. Añadir el dominio a Caddy

Localiza el Caddyfile en uso (normalmente `/etc/caddy/Caddyfile`, pero
confirma con `systemctl cat caddy | grep -i caddyfile` si no es la ruta
por defecto) y **añade al final** el bloque de
`docs/deploy/Caddyfile.bestronger` — no sustituyas el archivo, solo
añades este dominio nuevo a los que ya gestiona:

```bash
cat /srv/webbs/docs/deploy/Caddyfile.bestronger >> /etc/caddy/Caddyfile
caddy validate --config /etc/caddy/Caddyfile
systemctl reload caddy
```

Caddy emite y renueva el certificado TLS de `bestronger.es` automáticamente
en cuanto el DNS resuelva a esta IP — no hace falta Certbot ni ningún paso
manual de SSL.

En este punto, `https://bestronger.es` ya debería servir la app.

## 6. Automatizar despliegues con GitHub Actions

El workflow `.github/workflows/deploy.yml` ya está en el repo: en cada push
a `main` hace `git reset --hard origin/main` + `docker compose build` +
`docker compose up -d` en el VPS por SSH.

1. Genera un par de claves SSH dedicado a CI/CD (en tu máquina local, no en
   el VPS — esta es distinta de la deploy key del paso 3, que es para que
   el VPS lea de GitHub; esta otra es para que GitHub Actions entre al VPS):
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-webbs" -f gha_deploy_key -N ""
   ```
2. Añade la **pública** (`gha_deploy_key.pub`) a `~/.ssh/authorized_keys`
   del usuario que uses en el VPS (`root` en este caso).
3. En GitHub: repo → *Settings* → *Environments* → crea el entorno
   `production` (coincide con `environment: production` del workflow) →
   *Environment secrets* → añade:

   | Secret            | Valor                                    |
   | ----------------- | ----------------------------------------- |
   | `VPS_HOST`         | IP pública del VPS                        |
   | `VPS_USER`         | `root`                                     |
   | `VPS_SSH_KEY`      | contenido de la **privada** `gha_deploy_key` |
   | `VPS_PORT`         | `22` (opcional, es el valor por defecto)   |
   | `VPS_DEPLOY_PATH`  | `/srv/webbs`                               |

4. Haz push a `main` (o dispara el workflow manualmente desde la pestaña
   *Actions* → *Deploy a VPS (IONOS)* → *Run workflow*) y confirma que el
   job termina en verde y que `https://bestronger.es` refleja el cambio.

## 7. Apagar Vercel

Una vez confirmado que el VPS sirve correctamente `bestronger.es` con SSL:

1. En el proyecto de Vercel, quita el dominio personalizado si lo tuviera
   asignado (o simplemente deja de usarlo — el `.env.example` y
   `src/config/constants.ts` ya no referencian la URL de Vercel).
2. Opcional: pausa o elimina el proyecto en Vercel para dejar de consumir
   build minutes.

## Notas

- El contenedor **no** se expone directamente a Internet — solo escucha en
  `127.0.0.1:3001`; Caddy en el host es el único punto de entrada público
  (puertos 80/443), compartido con el resto de dominios que ya sirve esta
  VPS.
- El backend (`bckbs`, en `testapp.bestronger.es`) es un servicio aparte y no
  forma parte de este despliegue.
- Para desplegar manualmente sin esperar a GitHub Actions:
  ```bash
  cd /srv/webbs && git pull && docker compose up -d --build
  ```
