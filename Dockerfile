FROM node:16-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . /usr/src/app

EXPOSE 80

CMD ["npm","start"]