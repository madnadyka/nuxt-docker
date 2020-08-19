FROM node:10
RUN mkdir /web
WORKDIR /web
RUN mkdir src
COPY ./package*.json .
COPY ./nuxt.config.js .
RUN npm i -g npm && npm i -g --force yarn
RUN yarn install

CMD [ "yarn", "dev" ]
