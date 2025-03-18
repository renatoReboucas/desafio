FROM node:20.18.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g typescript

COPY . .

RUN tsc

RUN cp package.json package-lock.json .env dist/

EXPOSE 3333

CMD ["node", "dist/http/server.js"]