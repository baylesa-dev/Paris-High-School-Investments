FROM mhart/alpine-node:latest

WORKDIR /client

COPY package.json /client/
COPY yarn.lock /client/

RUN yarn
RUN yarn global add serve

COPY . /client/

EXPOSE 3000

CMD ["npm", "build"]