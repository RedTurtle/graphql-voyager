FROM node:15-buster-slim

WORKDIR /home/node
USER node

COPY --chown=node package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY index.js ./

CMD [ "yarn", "start" ]