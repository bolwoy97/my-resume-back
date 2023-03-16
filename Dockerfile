# Use a Node.js base image
FROM node:16-alpine

# Create a working directory for the application
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Compile the TypeScript code
RUN npm run build

# Set the container's environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose the application's port
EXPOSE ${PORT}

# Start the application
CMD ["npm", "start"]
