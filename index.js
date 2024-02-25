const kafka = require("kafka-node");

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9094" });

const topicsToCreate = [
  {
    topic: "test-topic",
    partitions: 1,
    replicationFactor: 1,
  },
];

client.createTopics(topicsToCreate, (error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});
