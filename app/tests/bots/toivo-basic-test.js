var restify = require('restify'),
    builder = require('botbuilder'),
    dotenv = require('dotenv').config()
    assert = require('assert');

var toivo = require('../../bots/bot-toivo');

var connector = new builder.ConsoleConnector();

var bot = new toivo.Toivo(connector);

bot.on('send', function (message) {
    assert(message.text == 'You said: Hello Toivo');
});

connector.processMessage('Hello Toivo');

