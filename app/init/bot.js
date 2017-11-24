var fs = require('fs')
    teams = require('botbuilder-teams'),
    builder = require('botbuilder');

module.exports = function (server) {
  var connector = new teams.TeamsChatConnector({
    appId: process.env.MICROSOFT_BOT_APP_ID !== 'undefined' ? process.env.MICROSOFT_BOT_APP_ID : '',
    appPassword: process.env.MICROSOFT_BOT_APP_SECRET !== 'undefined' ? process.env.MICROSOFT_BOT_APP_SECRET : '',
  });

  server.post('/api/messages', connector.listen());

  const triggers = {};

  var bot = new builder.UniversalBot(connector, function (session) {
    if (typeof triggers[session.message.text] !== 'undefined') {
      return session.beginDialog(triggers[session.message.text].name);
    }
    else {
      session.send('Ei eksisteeri');
    }
  });

  // Register dialogs
  var dialogsDir = __dirname + '/../dialogs';
  fs.readdirSync(dialogsDir).forEach(function(dir) {
    // Single dialog directory
    var dialogDir = dialogsDir + '/' + dir;

    fs.readdirSync(dialogDir).forEach(function(file) {
      var dialog = require(dialogDir + '/' + file);

      var options =  {
        name: dialog.name,
        permissions: dialog.permissions
      }

      if (typeof triggers[dialog.trigger] !== 'undefined') {
        throw Error("Dialog trigger '" + dialog.trigger + "' already registered");
      }

      triggers[dialog.trigger] = options;

      bot.dialog(dialog.name, dialog.dialogs);
    });
  });
};