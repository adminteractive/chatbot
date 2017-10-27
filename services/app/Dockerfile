FROM node:8.8.1

RUN echo "Europe/Tallinn" > /etc/timezone \
  && dpkg-reconfigure -f noninteractive tzdata

RUN apt-get update \
  && apt-get install -y \
     nano \
     vim \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app