FROM node:12

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=8080

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "node", "./dist/index.js" ]
