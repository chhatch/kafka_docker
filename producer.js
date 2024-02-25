const Transform = require("stream").Transform;
const ProducerStream = require("kafka-node").ProducerStream;
const { client } = require("./client");

const producer = new ProducerStream({
  kafkaClient: { kafkaHost: "localhost:9094" },
});

const stdinTransform = new Transform({
  objectMode: true,
  decodeStrings: true,
  transform(text, encoding, callback) {
    text = text.trim();
    console.log(`pushing message ${text} to test-topic`);
    callback(null, {
      topic: "test-topic",
      messages: text,
    });
  },
});

process.stdin.setEncoding("utf8");
process.stdin.pipe(stdinTransform).pipe(producer);
