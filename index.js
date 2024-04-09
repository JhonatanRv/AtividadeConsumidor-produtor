import express from "express";
import bodyParser from "body-parser";
import constrollers from "./controller.js";
import KafkaConfig from "./config.js";

const app = express();
const jsonParser = bodyParser.json();

app.post("/api/send", jsonParser, constrollers.sendMessageToKafka);

// consumindo do tópico "test-topic"
const kafkaConfig = new KafkaConfig();
kafkaConfig.consume("meu-topico", (value) => {
  console.log("📨 Receive message: ", value);
});

app.listen(8080, () => {
  console.log(`Servidor rodando na porta 8080.`);
});