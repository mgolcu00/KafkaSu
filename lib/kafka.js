const Broker = require('./broker');
const dotenv = require('dotenv');

dotenv.config();
const { KEY, SECRET, KAFKA_BOOTSTRAP_SERVER, CLIENT_ID } = process.env;
const broker = new Broker(KEY, SECRET, KAFKA_BOOTSTRAP_SERVER);
const kafka = broker.create(CLIENT_ID || 'kafka-client');

module.exports = kafka;