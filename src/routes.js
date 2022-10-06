const express = require('express');

const routes = express.Router(); //criar rotas

routes.get('/', (req,res) => {
    return res.status(200).json('Api da trilha backEnd')
});

module.exports = routes;

