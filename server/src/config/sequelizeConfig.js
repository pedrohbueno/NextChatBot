const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

sequelize.authenticate().then(() => {
    console.log('Banco de dados Conectado.');
}).catch((error) => {
    console.error('Erro na conexão com o banco de dados: ', error);
});

 module.exports = sequelize