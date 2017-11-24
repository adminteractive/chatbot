var builder = require('botbuilder');

module.exports = {
    name: "meaning_of_life",
    trigger: "what is the meaning of life",
    permissions: 'owner',
    dialogs: [
        function (session, results, next) {
            session.send('7');
            next();
        },
    ],
}