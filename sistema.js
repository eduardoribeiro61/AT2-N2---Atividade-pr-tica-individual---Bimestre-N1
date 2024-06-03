const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


let livros = [
  {
    id: 1,
    nome: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasia',
    exemplaresDisponiveis: 10,
    imagemCapa: 'senhor_aneis.jpg'
  },
 
];


app.use(bodyParser.json());


app.get('/livros', (req, res) => {
  res.json(livros);
});


app.post('/comprar/:id', (req, res) => {
  const { id } = req.params;
  
});


app.post('/livros', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT3000}`);
});
