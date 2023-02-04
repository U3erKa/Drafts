FROM node:18-alpine

RUN mkdir /server

WORKDIR /server

COPY . .

RUN npm install

# ENV key=value
# ARG PORT
# EXPOSE ${PORT}

EXPOSE 5000

CMD npm start
