const express = require('express');
const routes = express.Router(); //criar rotas
const UserController = require('./controlers/UserController'); 
const ProductController = require('./controlers/ProductController'); 
const BrandController = require('./controlers/BrandController');

routes.get('/', (req,res) => {
    return res.status(200).json('Api da trilha backEnd')
});

routes.post('/users', UserController.save)
routes.get('/users', UserController.list)
routes.put('/users/:id_user', UserController.edit)
routes.delete('/users/:id_user', UserController.delete)

routes.post('/products', ProductController.save)
routes.get('/products', ProductController.list)
routes.put('/products/:id_product', ProductController.edit)
routes.delete('/products/:id_product', ProductController.delete)

routes.post('/brands', BrandController.save)
routes.get('/brands', BrandController.list)
routes.put('/brands/:id_brand', BrandController.edit)
routes.delete('/brands/:id_brand', BrandController.delete)

module.exports = routes;

