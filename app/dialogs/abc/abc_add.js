var builder = require('botbuilder'),
    Abc = require('../../models/abc.js');


module.exports = [
    // Destination
    function (session) {
        builder.Prompts.text(session, 'Mis sa tahad, et ma ADM-i abc-sse lisaksin?');
    },
    function (session, results, next) {
        session.dialogData.destination = results.response;
        saveAbc(results.response, session.message.user.name, function (err) {
            if (!err) {
                session.send('Tänud, tuletan seda ADMile aeg ajalt meelde');
            } else {
                session.send('Tekkis viga andmete salvestamisega, proovi uuesti!');
            }
            next();
        });
    },
];

function saveAbc(result, user, callback) {
    var abc = new Abc({
        text: result,
        addedBy: user,
        timestamp: new Date()
    })  

    abc.save(function (err) {
        callback(err);
    })
}