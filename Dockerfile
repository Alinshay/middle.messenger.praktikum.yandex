FROM nginx
COPY dist /usr/share/nginx/html
COPY conf.template /etc/nginx/conf.d/conf.template
COPY nginx.conf /etc/nginx/nginx.conf
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
