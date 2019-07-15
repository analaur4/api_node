const app = require('./src/config/custom-express');

app.listen(3000, function() { // em qual porta irá rodar meu servidor
  console.log(`Servidor rodando na porta 3000`);
});
