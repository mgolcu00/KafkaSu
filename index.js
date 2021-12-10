const KafkaExpress = require('./lib/lib');

const server = new KafkaExpress();
server.listen()
// server.fetch('test-topic-2', 'test-group-2', 'test-event-2', (err, res) => {
//     console.log(err, res);
// })

server.basicFetch('test-topic-2', (err, res) => {
    if (err)
        console.error(err);
    else
        console.log(res);
})