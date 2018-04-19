FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json .npmrc ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]
