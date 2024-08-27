FROM node:18-alpine

WORKDIR /backend

COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application files to the container
COPY . .

# Expose the port that the app runs on
EXPOSE 4000

# Define environment variables
ENV PORT=4000

# Command to run the application
CMD ["npm", "start"]
