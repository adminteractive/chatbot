var builder = require('botbuilder'),
    Abc = require('../../models/abc.js');


module.exports = [
    function (session, next) {
        getAbc(function (err, result) {
            var cards = [];
            if (err) {
                session.send('Tekkis viga andmete kätte saamsiega andmebaasist!');
                return session.endDialog();
            }

            for (var i in result) {
                cards.push(generateCard(session, result[i]));
            }

            var reply = new builder.Message(session)
                .attachmentLayout(builder.AttachmentLayout.carousel)
                .attachments(cards);
            session.send(reply);
        });
    }
];

function generateCard(session, result) {
    var output = new builder.ThumbnailCard(session)
        .title('ABC')
        .text(result.text)
        .buttons([
            builder.CardAction.call(session, 'https://azure.microsoft.com/en-us/services/documentdb/', 'Kustuta')
        ]);

    return output;
}

function getAbc(callback) {
    Abc.find({}, function (err, abc) {
        callback(err, abc);
    })
}