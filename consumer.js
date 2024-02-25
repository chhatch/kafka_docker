const ConsumerStream = require("kafka-node").ConsumerStream;
const Transform = require("stream").Transform;

const { client } = require("./client");

const consumer = new ConsumerStream(client, [{ topic: "test-topic" }], {});

const stdoutTransform = new Transform({
  objectMode: true,
  decodeStrings: true,
  transform(message, encoding, callback) {
    callback(null, `topic: ${message.topic}, message: ${message.value}\n\n`);
  },
});

consumer.pipe(stdoutTransform).pipe(process.stdout);
