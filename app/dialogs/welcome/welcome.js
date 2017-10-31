module.exports = [
    // Destination
    function (session) {
        builder.Prompts.text(session, 'Mis sa tahad, et ma ADM-i abc-sse lisaksin?');
    },
    function (session, results, next) {
        session.dialogData.destination = results.response;
        session.send('Tänud, tuletan seda ADMile aeg ajalt meelde');
        
    },
];