# Stage 1: Build
FROM node:16-alpine AS builder

# Create a working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app’s files
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copy the compiled build from the 'builder' stage to Nginx's html folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
