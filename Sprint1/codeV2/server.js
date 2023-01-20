const express = require('express');
const http = require('http');
const mqtt = require('mqtt');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

//pas modif
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    credentials: true
  }
});

var random = Math.floor(Math.random() * 10000);

const client = mqtt.connect('mqtt://iot.iut-blagnac.fr:1883', {
    clientId : random.toString(), // Il faut  placer un id client random ou en lien avec le pc de l'utilisateur
    // car quand 2 connexion, problème de conflit
    clean : true, //olbigatoire ?
    connectTimeout : 5000, //olbigatoire ?
    username : "student",
    password : "student",
    reconnectPeriod : 100, //olbigatoire ?
});
let result;

client.on('connect', () => {
  console.log('Connected to MQTT server');
  client.subscribe(['#'],() => {console.log('Subscribe to all topics')});
});

client.on('message', (topic, message) => {
     result = message.toString();
     try {
        result = JSON.parse(result)
      } catch(e) {}

      let id = topic.toString();

      console.log("sending to " + topic)
    
      io.emit(encodeURI(topic), result)
});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
  server.listen(3001, () => {
    console.log('server listening on port 3001');
  });



