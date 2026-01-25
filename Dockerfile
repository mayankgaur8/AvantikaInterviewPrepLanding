# Build stage
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

# Runtime stage
FROM nginx:alpine
ARG IMAGE_TAG=latest
LABEL maintainer="mayankgaur"
LABEL org.opencontainers.image.version=${IMAGE_TAG}

# copy built assets
COPY --from=build /app/dist /usr/share/nginx/html
# copy nginx config for SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ensure curl is available for healthchecks, then clean apk cache
RUN apk add --no-cache curl && rm -rf /var/cache/apk/*

# healthcheck verifies nginx is serving
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:80/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
