FROM mhart/alpine-node:latest

WORKDIR /api

COPY package.json /api/
COPY yarn.lock /api/

RUN yarn

COPY . /api/

EXPOSE 8080

CMD ["npm", "start"]