var restify = require('restify'),
    builder = require('botbuilder'),
    dotenv = require('dotenv').config()
    assert = require('assert');

var toivo = require('../../bots/bot-toivo');

var connector = new builder.ConsoleConnector();

var toivoInstance = new toivo.Toivo(connector);

let dialogs = require('../../dialogs/all-dialog-routes');
toivoInstance.loadDialogs(dialogs);
toivoInstance.bot.on('send', function (message) {
    console.log(message);
    // assert(message.text == 'You said: Hello Toivo');
    // flow can be checked here
    // connector.processMessage('Hello Toivo');
});

connector.processMessage('welcome');

