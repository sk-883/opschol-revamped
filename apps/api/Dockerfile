# Use a lightweight Node 18 Alpine image as the base for all stages
FROM node:18-alpine AS base

#################################
# Stage 1: Builder
#################################
FROM base AS builder
# Update apk and install libc6-compat for native module support
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

# Install Turbo globally with npm
RUN npm install -g turbo

# Copy the entire project into the container
COPY . .

# Prune the project for the "api" workspace to reduce size.
# (Ensure your Turbo configuration supports this command)
RUN turbo prune api --docker

#################################
# Stage 2: Installer
#################################
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

# Copy pruned files (lockfiles, package.json, etc.) from builder
COPY --from=builder /app/out/json/ .

# Install dependencies using npm.
# Use npm ci for a clean, reproducible install if you have a package-lock.json
RUN npm ci

# Copy the full pruned project files
COPY --from=builder /app/out/full/ .

# Build the project using npm. Ensure your package.json has a build script, e.g. "build": "turbo run build"
RUN npm run build

#################################
# Stage 3: Runner
#################################
FROM base AS runner
WORKDIR /app

# Create a non-root user for security
RUN addgroup --system --gid 1001 expressjs && \
    adduser --system --uid 1001 expressjs
USER expressjs

# Copy the built application from the installer stage
COPY --from=installer /app .

# Define the container's entry point
CMD ["node", "apps/api/dist/index.js"]
