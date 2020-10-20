FROM node:latest

RUN mkdir -p /usr/sample
WORKDIR /usr/sample
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 9001
CMD [ "node", "app.js" ]