var builder = require('botbuilder'),
    restify = require('resitfy');

const server = restify.createServer({
  name: 'Bot Toivo',
  version: '1.0.0'
})

server.listen(80, function(){
  console.log("Toivo online at port 80");
});

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});
