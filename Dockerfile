FROM nginx

COPY ./dist/cloud-test-app/* /etc/nginx/html/

EXPOSE 80