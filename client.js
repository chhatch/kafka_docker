const KafkaClient = require("kafka-node").KafkaClient;

const client = new KafkaClient({ kafkaHost: "localhost:9094" });

module.exports = { client };

const topicsToCreate = [
  {
    topic: "test-topic",
    partitions: 1,
    replicationFactor: 1,
  },
];

// client.createTopics(topicsToCreate, (error, result) => {
//   if (error) {
//     console.error("Error:", error);
//   } else {
//     console.log("Result:", result);
//   }
// });
