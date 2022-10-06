const Product = require('../models/Product');
module.exports = {
    async save(req, res) {
        const {id_brand, name,description,price,img_uri,category} = req.body //pegando os dados passados na requisição

        const result = await Product.create({id_brand, name,description,price,img_uri,category}) //Indo cradastrar

        return res.status(200).send(result) //retorna caso o cadastro seja realizado
    },

    async list(req, res) {
        const result = await Product.findAll()

        return res.status(200).send(result)
    },

    async edit(req, res) {
        const {id_product} = req.params

        const {id_brand, name,description,price,img_uri,category} = req.body

        const product = await Product.findByPk(id_product)

        const result = await product.update({id_brand, name,description,price,img_uri,category})

        return res.status(200).send(result)
    },

    async delete(req, res) {
        const {id_product} = req.params

        const product = await Product.findByPk(id_product)

        const result = await product.destroy()

        return res.status(200).send(result)
    },
}