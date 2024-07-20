// producer.js
const { Kafka } = require('kafkajs');

// Create a Kafka client

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'] // Kafka broker addresses
});

// Create a producer
const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();
  console.log('Producer connected');

  // Send a message
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello Kafka!' },
    ],
  });

  await producer.send({
    topic:'next-topic',
    messages:[
        {value:'Hello Udayan'}
    ]
  })

  await producer.send({
    topic:'test',
    messages:[
        {value:'how are you'}
    ]
  })

  console.log('Message sent');
  await producer.disconnect();
};

runProducer().catch(console.error);
