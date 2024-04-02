FROM node:lts-alpine3.19

EXPOSE 9090

WORKDIR /app

COPY . .

RUN npm install 

CMD [ "node" , "./server.js" ]