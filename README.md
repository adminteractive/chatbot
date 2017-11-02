Bot Toivo - The Employee Happiness Manager
===============================
Toivo is a chatbot who acts as an Employee Happiness Manager


Setup
------
1. Copy .env file from template .env.sample

```bash
cp .env.sample .env

```
2. In project root, run docker

```bash
docker-compose up -d

```
3. Access application under app.docker.localhost:8000

Installation
------

```bash

npm install

```

Usage
------

```bash
node app.js

```

Emulator
------
* For the standard way <a href="https://github.com/Microsoft/BotFramework-Emulator"> Follow the instructions here</a>
OR
* If you are using Linux with desktop environment then <a href="https://github.com/MartinAnt/botframework-emulator-dockerized"> Check this out</a>

The latter enables you to run emulator inside a container which is linked to the application network