FROM node:23

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5066

CMD ["npm", "start"]


# docker build -t convo-connect-prod .
# docker run -it --rm --name convo-connect-prod -p 5066:5066 convo-connect-prod
# docker build -t convo-connect-prod . && docker run -it --rm --name convo-connect-prod -p 5066:5066 convo-connect-prod



