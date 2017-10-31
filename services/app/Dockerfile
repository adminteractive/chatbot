FROM node:8.8.1

RUN echo "Europe/Tallinn" > /etc/timezone \
  && dpkg-reconfigure -f noninteractive tzdata

RUN apt-get update \
  && apt-get install -y \
     nano \
     vim \
  && rm -rf /var/lib/apt/lists/*

RUN npm install -g nodemon

WORKDIR /usr/src/app

CMD ["/usr/local/bin/nodemon", "/usr/src/app/app.js"]
