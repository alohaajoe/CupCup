const brokerUrl = 'ws://192.168.1.54:8080';
const client = mqtt.connect(brokerUrl);

client.on('connect', function () {
    client.subscribe('cupcup');
    console.log("connect yeah");
});

client.on('message', function (topic, message) {
    const weight = message.toString();
    document.getElementById('weight').textContent = weight;
    console.log("weight", weight);
    updateBar(weight);
});

// Beispielwert für "cupcup" (ersetze dies mit deinem eigenen Wert)
//var cupcup = 15;
const cupcupMax = 400;

// Funktion zum Aktualisieren des Balkens
function updateBar(value) {
    value = Math.min(Math.max(parseInt(value), 0), cupcupMax); //constrain the Value to not go over the Limits
    var bar = document.getElementById('rangeLabel');
    var maxWidth = document.getElementById('range').clientWidth;
    var fillWidth = (value / cupcupMax) * maxWidth;

    bar.style.width = fillWidth + 'px';

    // Entferne zuerst alle Farbklassen
    bar.classList.remove('red', 'yellow', 'green');

    // Füge die entsprechende Farbklasse basierend auf dem Wert hinzu
    if (value <= cupcupMax/3) {
        bar.classList.add('red');
    } else if (value <= cupcupMax/3*2) {
        bar.classList.add('yellow');
    } else {
        bar.classList.add('green');
    }
}

// Schleife, um den Balken regelmäßig zu aktualisieren
//setInterval(function () {
    // Aktualisiere den Wert von "cupcup" (ersetze dies mit deinem eigenen Code, um den Wert zu aktualisieren)
    // Beispiel: cupcup = getUpdatedValue();

    // Rufe die Funktion auf, um den Balken mit dem aktuellen Wert zu aktualisieren
//    updateBar(cupcup);
//}, 1000); // Aktualisiere alle 1000 Millisekunden (1 Sekunde)


