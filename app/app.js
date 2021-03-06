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
};


mongoose.connect(process.env.MONGODB_URL, mongoOptions);

const db = mongoose.connection;

const port = typeof process.env.APP_PORT !== 'undefined' ? process.env.APP_PORT : 80;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected to database!");
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(port, function(){
  console.log("Toivo is online at port " + port);
});

var connector = new teams.TeamsChatConnector({
  appId: '',
  appPassword: ''
});

server.post('/api/messages', connector.listen());

const triggers = {
  'lisa abc': {
    folder: 'abc',
    file: 'abc_add',
    permissions: 'owner'
  }
};

var bot = new builder.UniversalBot(connector, function (session) {
  if(typeof triggers[session.message.text] !== 'undefined'){
    return session.beginDialog(triggers[session.message.text].file);
  }else{
    session.send('Ei eksisteeri');
  }
});

bot.dialog('abc_add', require('./dialogs/abc/abc_add'));
