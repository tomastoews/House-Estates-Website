FROM nginx:alpine

RUN mkdir usr/share/nginx/html/houseestates
COPY /dist/ usr/share/nginx/html
COPY /dist/ usr/share/nginx/html/houseestates

EXPOSE 80