const Joi = require ('joi')

const produtosSchema = Joi.object({
    
        nome: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        administrador: Joi.string(),
        _id: Joi.string()
    })

export default produtosSchema;