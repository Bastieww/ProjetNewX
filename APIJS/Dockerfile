FROM node:lts-alpine3.19

EXPOSE 9090

WORKDIR /app

COPY . .

RUN npm install

RUN npx prisma generate

CMD [ "node" , "./server.js" ]