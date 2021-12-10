const kafka = require('./kafka');

class Producer {
    constructor() {
        this.producer = kafka.producer();
    }

    async send(data, topic) {
        try {
            await this.producer.send({
                topic: topic,
                messages: [
                    {
                        value: JSON.stringify(data),
                    }
                ]
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    produce = async (data, topic) => {
        if (!data) return console.log('No data to send');
        try {
            await this.producer.connect();
            await this.executeSend(data, topic)
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Producer;