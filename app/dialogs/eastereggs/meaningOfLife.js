var builder = require('botbuilder');

module.exports = {
    name: "meaning_of_life",
    dialogs: [
        function (session, results, next) {
            session.send('7');
            next();
        },
    ],
}