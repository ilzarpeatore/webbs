# syntax=docker/dockerfile:1

FROM node:22-alpine AS base

# --- deps: instala dependencias (cacheable mientras no cambie package*.json) ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- builder: build de producción de Next.js ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Necesarias en build time porque metadataBase / sitemap / robots se generan
# en Server Components; en runtime también se pueden sobreescribir vía
# docker-compose (ver .env.production en el VPS).
ARG SITE_URL=https://bestronger.es
ARG API_BASE_URL=https://testapp.bestronger.es/api
ENV SITE_URL=$SITE_URL
ENV API_BASE_URL=$API_BASE_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- runner: imagen final, mínima, solo con el output standalone ---
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
