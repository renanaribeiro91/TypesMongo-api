FROM node:alpine

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies
COPY  package*.json ./ 
RUN npm install

COPY ./dist .

EXPOSE 8080

CMD ["npm","start"]
