const User = require('../models/User');
const { generateHash } = require('../utils/auth');
module.exports = {
    async save(req, res) {
        let {name,email,password,zip_code,cpf} = req.body; //pegando os dados passados na requisição

        const bcrypt = await generateHash({name,email,password,zip_code,cpf}.password);

        {name,email,password,zip_code,cpf}password = bcrypt
        
        const result = await User.create({name,email,password,zip_code,cpf}) //Indo cradastrar

        return res.status(200).send(result) //retorna caso o cadastro seja realizado
    },

    async list(req, res) {
        const result = await User.findAll()

        return res.status(200).send(result)
    },

    async edit(req, res) {
        const {id_user} = req.params

        const {name,email,password,zip_code,cpf} = req.body

        const user = await User.findByPk(id_user)

        const result = await user.update({name,email,password,zip_code,cpf})

        return res.status(200).send(result)
    },

    async delete(req, res) {
        const {id_user} = req.params

        const user = await User.findByPk(id_user)

        const result = await user.destroy()

        return res.status(200).send(result)
    },
}