const express = require("express")
const app = express()
require('dotenv').config();

const port = process.env.PORT || 8000

//Chamada das Rotas
const userRoutes = require('./src/routes/userRoutes');

//Definição de Rotas
app.use('/user', userRoutes);
console.log(userRoutes)

app.listen(port, () => console.log(`Server rodando na porta: ${port}!`))
