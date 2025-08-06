# Base image from DockerHub
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose port to outside the container
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
