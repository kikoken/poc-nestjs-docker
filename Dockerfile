FROM node:alpine
ENV NODE_ENV production
USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package.json .

USER node
COPY --chown=node:node . .

RUN npm install --production

COPY dist/ .

EXPOSE 3000
CMD ["node", "main.js"]

USER node