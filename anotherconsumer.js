const {Kafka} =require("kafkajs")

const kafka=new Kafka({
    clientId:"another",
    brokers:['localhost:9092']
})



const consumer=kafka.consumer({groupId:'my-consumer'})

const runConsumer=async()=>{
    await consumer.connect()

    console.log("another consumer connected");
    await consumer.subscribe({topic:'next-topic'})

    await consumer.run({
        eachMessage:async({topic,partition,message})=>{
            console.log(message.value.toString());
        }
    })
}


runConsumer().catch(console.error);