FROM nginx

RUN mkdir -p /etc/nginx/conf.d
COPY ./dist/cloud-test-app/* /etc/nginx/html/
ADD ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80