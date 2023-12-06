const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'devcb_db',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate().then(() => {
    console.log('Banco de dados Conectado.');
}).catch((error) => {
    console.error('Erro na conexão com o banco de dados: ', error);
});

 module.exports = sequelize