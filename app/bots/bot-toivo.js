var builder = require('botbuilder');

function Toivo(connector) {

    this.init = function(connector) {
        this.bot = new builder.UniversalBot(connector, function (session) {
            // session.send("You said: %s", session.message.text);
            return session.beginDialog('welcome');
        });

        
    };

    this.init(connector);

    return this;
}

Toivo.prototype.loadDialogs = function (dialogs) {
    
    for(let key in dialogs) {
        
        // console.log(key);
        // console.log(dialogs[key]['dialogs']);
        this.bot.dialog(key, dialogs[key]['dialogs']);
        // .triggerAction(dialogs[key]['triggerAction']);

        // console.log(this.bot);
    }
}

module.exports.Toivo = Toivo;