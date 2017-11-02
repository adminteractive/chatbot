Bot Toivo - The Employee Happiness Manager
===============================
Toivo is a chatbot who acts as an Employee Happiness Manager


# Environment

## Docker setup

1. Copy .env.sample to .env

```bash
cp .env.sample .env

```
2. In project root, run docker

```bash
docker-compose up -d

```
3. Access application under app.docker.localhost:8000

## Navigating

* To get inside application container
```bash
docker-compose exec --user node app bash -l
```

# Application

## Environment

In order to change application specific settings, like mongodb url.

1. 

```bash
cd ./app

```

2. Copy .env.sample to .env

```bash
cp .env.sample .env

```

## Installation
**If you are using docker, then the following instructions should be done inside app container. Check the docker part 
part of the Readme for instructions**
```bash

npm install

```

## Usage

When using docker, the application server is automatically started and restarted with nodemon.
The default server port is 80 but you can change it in .env file.

# Emulator

* For the standard way <a href="https://github.com/Microsoft/BotFramework-Emulator"> Follow the instructions here</a>

OR

* If you are using Linux with desktop environment then <a href="https://github.com/MartinAnt/botframework-emulator-dockerized"> Check this out</a>

The latter enables you to run emulator inside a container which is linked to the application network