const kafka = require('./kafka');

class Consumer {
    constructor(consumerConfig) {
        consumerConfig.groupId = consumerConfig.groupId || 'default-consumer-group';
        this.consumer = kafka.consumer(consumerConfig);
    }

    consume = async (topic, callback, fromBeginning = false) => {
        if (!topic) {
            callback(new Error('topic is required'), null);
        }
        try {
            await this.consumer.connect();
            await this.consumer.subscribe({
                topic,
                fromBeginning: fromBeginning
            });

            await this.consumer.run({
                eachMessage: async ({ topic, partition, message }) => {
                    const data = message.value;
                    callback(null, data);
                }
            });
        } catch (err) {
            callback(err, null);
        }
    }

    close = async () => {
        await this.consumer.disconnect();
    }
}

module.exports = Consumer;