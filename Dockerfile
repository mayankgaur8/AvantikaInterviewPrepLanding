# Build stage - build the frontend and keep server sources
FROM node:20-alpine AS build
ARG IMAGE_TAG=latest
LABEL org.opencontainers.image.source="https://github.com/mayankgaur8/AvantikaInterviewPrepLanding"
LABEL org.opencontainers.image.version=${IMAGE_TAG}
WORKDIR /app
# copy package files first to leverage Docker cache
COPY package.json package-lock.json* ./
RUN npm ci --silent
# copy rest of the source and build
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Runtime stage - use node alpine and install nginx so we can run both server + nginx
FROM node:20-alpine AS runtime
ARG IMAGE_TAG=latest
LABEL maintainer="mayankgaur"
LABEL org.opencontainers.image.version=${IMAGE_TAG}

WORKDIR /app

# install nginx and curl (for healthcheck)
RUN apk add --no-cache nginx curl

# copy built frontend assets and nginx config
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# copy server files and package manifest to install server dependencies
COPY --from=build /app/package.json /app/package-lock.json* ./
COPY --from=build /app/server ./server

# install production deps only (server dependencies are in package.json)
RUN npm ci --production --silent || npm install --production --silent

# expose ports for nginx (80) and optional node server (3000)
EXPOSE 80 3000

# healthcheck uses curl to validate nginx is serving
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:80/ || exit 1

# Start the node server in background and run nginx in foreground
# Using a shell form to start both processes; node server will log to stdout
CMD node server/index.js & nginx -g 'daemon off;'
