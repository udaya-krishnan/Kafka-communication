// consumer.js
const { Kafka } = require('kafkajs');

// Create a Kafka client
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'] // Kafka broker addresses
});

// Create a consumer
const consumer = kafka.consumer({ groupId: 'test-group' });

const runConsumer = async () => {
  await consumer.connect();
  console.log('Consumer connected');

  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });
  await consumer.subscribe({topic:'next-topic',fromBeginning:true})
  await consumer.subscribe({topic:'test',fromBeginning:true})

  console.log("consumer subscribe");

  // Process messages
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    },
  });


};

runConsumer().catch(console.error);
