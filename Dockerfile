# Currency Service Dockerfile
# Build a lightweight container for the Node.js microservice

FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose service port
EXPOSE 5000

# Run the service
CMD ["node", "src/server.js"]
