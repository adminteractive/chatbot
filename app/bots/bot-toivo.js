var builder = require('botbuilder');

function Toivo(connector) {

    this.init = function(connector) {
        this.bot = new builder.UniversalBot(connector, function (session) {
            session.send("You said: %s", session.message.text);
        });
    };

    this.init(connector);

    return this.bot;
}

module.exports.Toivo = Toivo;