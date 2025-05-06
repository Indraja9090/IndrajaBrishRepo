# Step 1: Use Node image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy rest of the app
COPY . .

# Step 5: Build the React app
RUN npm run build

# Step 6: Use nginx to serve build files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Optional: Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
