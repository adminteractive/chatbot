// Dependencies
var restify = require('restify'),
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
// Server port
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

var bot = require('./init/bot');
bot(server);
