var builder = require('botbuilder');

var dialog = {
  'id': 'meaningOfLife',
  'flow': [
    function (session) {
      session.send('The meaning of life life is 4!');
      builder.Prompts.confirm(session, 'Don\'t you agree ?');
    },
    function (session, results) {
      console.log(results);
    }
  ]
};

module.exports = dialog;