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

Either use the following solution if you want to keep running this application from container while still being able to use the emulator. If using this approach, your bot will be available on the following endpoint: http://localhost/api/messages

```bash
https://github.com/MartinAnt/botframework-emulator-dockerized
```

Or use the emulator from your host environment. This means you should also run the node app from your host machine instead of docker because otherwise the bot-builder won't be able to connect back to the emulator and send messages.

1. 

```bash
cd ./emulator
```

2. Install emulator dependencies+

```bash
npm i

```
3. Build and start emulator

```bash
npm run build && npm start

```
4. Change emulator's url if necessary
