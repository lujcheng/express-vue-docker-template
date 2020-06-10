FROM node:10.16.0

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./src

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]