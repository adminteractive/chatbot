var builder = require('botbuilder'),
    restify = require('restify'),
    teams = require('botbuilder-teams'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv').config();

const server = restify.createServer({
  name: 'Bot Toivo',
  version: '1.0.0'
});

const mongoOptions = {
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASSWORD
}

mongoose.connect(process.env.MONGODB_URL, mongoOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected to databas!");
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(3000, function(){
  console.log("Toivo onlineasd at port 80");
});

var connector = new teams.TeamsChatConnector({
    appId: '',
    appPassword: ''
});

server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
  session.send("Test");
});
