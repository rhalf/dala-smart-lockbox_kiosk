FROM node:14.9.0

WORKDIR /dsl-kiosk

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]