# Despliegue en VPS de IONOS

Guía paso a paso para migrar `webbs` de Vercel a un VPS propio de IONOS con
dominio `bestronger.es`. Stack: Docker (la app) + Nginx en el host (reverse
proxy + TLS con Let's Encrypt) + GitHub Actions (CI/CD por SSH en cada push
a `main`).

Archivos relevantes ya presentes en el repo:

- `Dockerfile` — build multi-stage de Next.js en modo `standalone`.
- `docker-compose.yml` — levanta el contenedor `web`, escuchando solo en
  `127.0.0.1:3000` (Nginx delante).
- `.github/workflows/deploy.yml` — hace `git pull` + `docker compose up -d`
  en el VPS por SSH en cada push a `main`.
- `docs/deploy/nginx-bestronger.conf` — config de Nginx de ejemplo.

## 1. Contratar y preparar el VPS en IONOS

1. En el panel de IONOS, contrata un VPS Linux (Ubuntu 24.04 LTS recomendado;
   con 2 GB de RAM es suficiente para esta app).
2. Anota la **IP pública** que te asigna IONOS.
3. Conéctate por SSH como root con la contraseña/clave que te dé IONOS:
   ```bash
   ssh root@TU_IP_DEL_VPS
   ```
4. Crea un usuario no root para operar (evita trabajar como root a diario):
   ```bash
   adduser deploy
   usermod -aG sudo deploy
   ```
5. Copia tu clave pública SSH a ese usuario (o genera una nueva par de claves
   específica para despliegues — la usaremos también en GitHub Actions):
   ```bash
   rsync --archive --chown=deploy:deploy ~/.ssh /home/deploy
   ```
6. (Recomendado) Firewall básico:
   ```bash
   ufw allow OpenSSH
   ufw allow 80
   ufw allow 443
   ufw enable
   ```

A partir de aquí, todo como usuario `deploy` (`su - deploy`).

## 2. Instalar Docker y Nginx en el VPS

```bash
# Docker Engine + Compose plugin
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
# cierra sesión y vuelve a entrar para que el grupo docker aplique

# Nginx + Certbot (fuera de Docker, gestiona TLS y el proxy)
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

## 3. Clonar el repo en el VPS

```bash
sudo mkdir -p /srv/webbs
sudo chown deploy:deploy /srv/webbs
git clone https://github.com/ilzarpeatore/webbs.git /srv/webbs
cd /srv/webbs
git checkout main
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
curl -I http://127.0.0.1:3000
```

Deberías ver `HTTP/1.1 200 OK` (o un redirect a `/home`, ver
`next.config.ts`).

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

## 5. Configurar Nginx + certificado SSL

```bash
sudo cp /srv/webbs/docs/deploy/nginx-bestronger.conf /etc/nginx/sites-available/bestronger.es
sudo ln -s /etc/nginx/sites-available/bestronger.es /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Una vez el DNS ya resuelva a la IP del VPS (paso 4), emite el certificado:

```bash
sudo certbot --nginx -d bestronger.es -d www.bestronger.es
```

Certbot reescribe el archivo de Nginx añadiendo el bloque 443 con TLS y el
redirect automático de 80→443, y deja configurada la renovación automática
(`certbot renew` vía systemd timer, no requiere acción manual).

En este punto, `https://bestronger.es` ya debería servir la app.

## 6. Automatizar despliegues con GitHub Actions

El workflow `.github/workflows/deploy.yml` ya está en el repo: en cada push
a `main` hace `git reset --hard origin/main` + `docker compose build` +
`docker compose up -d` en el VPS por SSH.

1. Genera un par de claves SSH dedicado a CI/CD (en tu máquina local, no en
   el VPS):
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-webbs" -f deploy_key -N ""
   ```
2. Añade la **pública** (`deploy_key.pub`) a `~/.ssh/authorized_keys` del
   usuario `deploy` en el VPS.
3. En GitHub: repo → *Settings* → *Environments* → crea el entorno
   `production` (coincide con `environment: production` del workflow) →
   *Environment secrets* → añade:

   | Secret            | Valor                                    |
   | ----------------- | ----------------------------------------- |
   | `VPS_HOST`         | IP pública del VPS                        |
   | `VPS_USER`         | `deploy`                                   |
   | `VPS_SSH_KEY`      | contenido de la **privada** `deploy_key`   |
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
  `127.0.0.1:3000`; Nginx en el host es el único punto de entrada público
  (puertos 80/443), lo que permite gestionar TLS con Certbot de forma normal.
- El backend (`bckbs`, en `testapp.bestronger.es`) es un servicio aparte y no
  forma parte de este despliegue.
- Para desplegar manualmente sin esperar a GitHub Actions:
  ```bash
  cd /srv/webbs && git pull && docker compose up -d --build
  ```
