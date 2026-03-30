# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Stage 2: Serve
FROM pierrezemb/gostatic
COPY --from=builder /app/dist /srv/http/
CMD ["-port", "8080", "-enable-logging"]