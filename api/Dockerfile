FROM node:18-alpine3.17 AS base
RUN npm i -g pnpm@8.1.0

FROM base AS dependencies
WORKDIR /app
ADD package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS deploy
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
CMD ["node", "index.js"]


