var builder = require('botbuilder');

function saveAbc(result) {
    console.log(result);
}  

module.exports = {
    name: "abc_dialog",
    dialogs: [
        function (session) {
            builder.Prompts.text(session, 'Mis sa tahad, et ma ADM-i abc-sse lisaksin?');
        },
        function (session, results, next) {
            session.dialogData.destination = results.response;
            session.send('Tänud, tuletan seda ADMile aeg ajalt meelde');
            saveAbc(results.response);
            next();
        },
    ],
}