# Build stage
FROM node:21-alpine AS build

WORKDIR /home/app

# Copy the package.json and package-lock.json files to the container
COPY ./angular.json /home/app
COPY ./package*.json /home/app
COPY ./tsconfig*.json /home/app
COPY ./tailwind.config.js /home/app

RUN npm install

# Copy the source code to the container
COPY ./src /home/app/src

RUN npm run build --prod

# Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest

# Copy the custom nginx configuration file to the container in the default location
COPY ./nginx.conf /etc/nginx/nginx.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build /home/app/dist/platform-training /usr/share/nginx/html

EXPOSE 4201
