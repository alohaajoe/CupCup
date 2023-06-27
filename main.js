const brokerUrl = 'ws://192.168.2.183:8080';
const client = mqtt.connect(brokerUrl);

client.on('connect', function () {
    client.subscribe('cupcup');
    console.log("connect yeah");
});

client.on('message', function (topic, message) {
    const weight = message.toString();
    document.getElementById('weight').textContent = weight;
    console.log("weight", weight);
});