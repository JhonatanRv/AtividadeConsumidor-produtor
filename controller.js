import KafkaConfig from "./config.js";

const sendMessageToKafka = async (req, res) => {
  try {
    const { message } = req.body;
    const kafkaConfig = new KafkaConfig();
    const messages = [{ key: "key1", value: message }];
    kafkaConfig.produce("meu-topico", messages);

    res.status(200).json({
      status: "Ok!",
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.log(error);
  }
};

const constrollers = { sendMessageToKafka };

export default constrollers;