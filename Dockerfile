FROM node:10.16.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./src

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]