const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);
connection.authenticate()
    .then(() => {console.log('Conexão criada')})
    .catch((error) => { console.log(error)});
    
module.exports = connection;