
const logger = require('../../health/logger/index')

// Models 
const User = require('../../model/User.model') 

// Utility 
const  { getMailBody } = require('../../utils/Mail/getMailBody') 
const  { sendMail } = require('../../utils/Mail/sendMail') 
const crypto = require('crypto') 
const { resolve } = require('path')



const createUser  = async function( user )
            {
                try 
                {
                    const newUser = await User.create( user )
                    return newUser 
                }
                catch(err)
                {
                    logger.error(err)
                    return false 
                }
            }



const sendSignupMail = async function(userEmail, userData)
{
    return new Promise(async (resolve, reject)=>{
        try 
        {

            const mailBody = await getMailBody(userEmail,'signup',userData) 
            await sendMail(mailBody) 

            resolve(true)
        }
        catch(err)
        {
            reject(err)
        }
    })
}



module.exports = { createUser, sendSignupMail  }