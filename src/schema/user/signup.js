const Joi = require('joi') 

const UserSignupSchema = Joi.object
                (
                    {
                        email: Joi.string().email().required(),
                        firstname: Joi.string().required(),
                        lastname: Joi.string().required(), 
                        password: Joi.string().alphanum().required(), 
                        repeatPassword: Joi.ref('password') 
                    }
                )


module.exports = { UserSignupSchema } 