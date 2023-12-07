const express = require("express")
const app = express()
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOptions = {
  origin: 'http://localhost:3000',
};


app.use(cors(corsOptions)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000

//Chamada das Rotas
const userRoutes = require('./src/routes/userRoutes');
const accessRoutes = require('./src/routes/accessRoutes');

//Definição de Rotas
app.use('/user', userRoutes);
app.use('/access', accessRoutes);

app.listen(port, () => console.log(`Server rodando na porta: ${port}!`))
