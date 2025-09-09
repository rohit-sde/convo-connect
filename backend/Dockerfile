FROM node:23

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5204

CMD ["npm", "start"]


# docker build -t convo-connect-prod .
# docker run -it --rm --name convo-connect-prod -p 5204:5204 convo-connect-prod
# docker build -t convo-connect-prod . && docker run -it --rm --name convo-connect-prod -p 5204:5204 convo-connect-prod



