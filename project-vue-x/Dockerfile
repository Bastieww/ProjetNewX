FROM node:lts-alpine3.19

EXPOSE 80

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD [ "npm" , "run" , "preview" ]