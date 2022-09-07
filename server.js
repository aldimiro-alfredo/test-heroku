const express = require('express'); 
const app = express(); 
 
app.get('/', (req, res) => { 
  res 
    .status(200) 
    .send(' Olá servidor está rodando ') 
    .end(); 
}); 
 
// Inicia o servidor 
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => { 
  console.log(`App escutando na porta ${PORT}`); 
  console.log('Pressione Ctrl+C para sair.'); 
});