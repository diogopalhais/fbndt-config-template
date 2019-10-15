FROM node:10-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

CMD [ "npm", "start" ]