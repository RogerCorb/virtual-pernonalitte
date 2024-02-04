const express = require('express');
require('dotenv').config();
const router = require('./routes/userRouters');
const app = express();

// Configuração para servir arquivos estáticos
app.use(express.static('public'));

app.use(router);

// Outras configurações do servidor...

// Inicie o servidor
const PORT = process.env.PORT //|| 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
