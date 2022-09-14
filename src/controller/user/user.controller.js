// Modules 
require('dotenv').config() 
const logger = require('../../health/logger/index') 
const { ServerError }  = require('../../utils/Response/index') 

// Models 
const User = require('../../model/User.model') 

// Services 
const { createUser, sendSignupMail } = require('../../service/user/user.service')

// Auth Schemas 
const { UserSignupSchema } = require('../../schema/user/signup') 

// Utils 
const crypto = require('crypto')


const signup = async function(req, res, next)
{
    try 
    {

        // Request Body Validation 
        const requestBodyIsValid = await UserSignupSchema.validateAsync(req.body) 
        
        // Set Verification Link 
        const emailVerificationCode = crypto.randomBytes(16).toString("hex") 
        const verificationLink = `${req.headers.host}/api/user/verifyEmail/${emailVerificationCode}` 

        // Add Verification Code to req.body 
        req.body.emailVerificationCode = emailVerificationCode 

        // Create User 
        const newUser = await createUser( req.body )

        // Remove User Password 
        newUser.password = '' 
        
        logger.info(' New User Created ') 

        
        // Send Mail 
        const firstname = req.body.firstname
        await sendSignupMail(req.body.email,{ verificationLink, firstname })


        return res.status(201).json({ success: true, "msg":" New User created, check email for verification mail", data: newUser })
    }
    catch(err)
    {
        if( err.isJoi )
        {
            return res.status(400).json({ success: false, msg: err.message })
        }
        logger.error(err)
        return ServerError(err.message, res) 
    }
}



module.exports = { signup } 