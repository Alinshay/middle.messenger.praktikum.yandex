FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "node", "server.js" ]
