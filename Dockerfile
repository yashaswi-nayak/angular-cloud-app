FROM nginx

RUN mkdir -p /etc/nginx/conf.d
COPY ./dist/cloud-test-app/* /etc/nginx/html/
COPY ./default.conf /etc/nginx/nginx.conf

EXPOSE 80