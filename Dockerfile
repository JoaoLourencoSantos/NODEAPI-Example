FROM node:10.15.3-alpine

WORKDIR /usr/app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 5432

CMD npm start
