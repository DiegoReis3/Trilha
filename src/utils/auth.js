const bcrypt = require('bcrypt');
const { password } = require('../config/database');

module.exports = {
    generateHash: async (password) => {
        return await new Promise((resolve, reject) => {
            bcrypt.hash(password, bcrypt.genSaltSync(8), (error, hash) => {
                if(error) 
                 
                reject(error);
                resolve(hash);
            })
        })
    }
}