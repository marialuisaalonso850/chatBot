// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  function start(client) {
    client.onMessage((message) => {
      if (message.isGroupMsg === false) {
        const userMessage = message.body.toLowerCase();
  
        switch (userMessage) {
          case 'hola':
            client
              .sendText(message.from, 'hola bienvenido sea')
              .then((result) => {
                console.log('Result: ', result); // Devuelve el objeto de éxito
              })
              .catch((error) => {
                console.error('Error when sending: ', error); // Devuelve el objeto de error
              });
            break;
          
          case 'gracias' :
            client
              .sendText(message.from, 'gracias')
              .then((result) => {
                console.log('Result: ', result); // Devuelve el objeto de éxito
              })
              .catch((error) => {
                console.error('Error when sending: ', error); // Devuelve el objeto de error
              });
            break;
  
          case 'bye':
            client
              .sendText(message.from, 'Goodbye! Have a great day!')
              .then((result) => {
                console.log('Result: ', result); // Devuelve el objeto de éxito
              })
              .catch((error) => {
                console.error('Error when sending: ', error); // Devuelve el objeto de error
              });
            break;

            case 'como estas':
                client
                  .sendText(message.from, 'Bien gracias')
                  .then((result) => {
                    console.log('Result: ', result); // Devuelve el objeto de éxito
                  })
                  .catch((error) => {
                    console.error('Error when sending: ', error); // Devuelve el objeto de error
                  });
                break;
  
        
          default:
            client
              .sendText(message.from, "Vuelva pronto :)")
              .then((result) => {
                console.log('Result: ', result); // Devuelve el objeto de éxito
              })
              .catch((error) => {
                console.error('Error when sending: ', error); // Devuelve el objeto de error
              });
            break;
        }
      }
    });
  }
  