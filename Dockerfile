# MULTI STAGE CONTANER BUILD

# STAGE 1
FROM node:12.18.4-alpine3.12 as builder

# copy the 'package.json' to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /ui && mv ./node_modules ./ui

WORKDIR /ui

COPY . .

# NOW BUILD THE PROJECT
RUN npm run build
# STAGE 1 COMPLETE

# STAGE 2 # ACTUAL CONTAINER BUILD
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# COPY FROM STAGE 1
COPY --from=builder /ui/build /usr/share/nginx/html
# STAGE 2 COMPLETE

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
