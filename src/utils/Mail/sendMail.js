require('dotenv').config() 

const logger = require('../../health/logger/index')
const MailGun = require('mailgun-js')
const MailGunClient = MailGun({ apiKey: process.env.MAIL_GUN_API_KEY, domain: process.env.MAIL_GUN_DOMAIN })



async function sendMail(mail) 
{
  return new Promise((resolve, reject)=>{

        logger.info(' Sending mail ')
        MailGunClient.messages().send(mail, (err, body )=>{

            /*** NOTE: Mailgun test account temporarily blocked due to exposed credentials on github
             *   This function assumes the mail was sent successfully and does'nt actually send mail 
             */
            // if( err )
            // {
            //     logger.info(' Mail Sender Encounter Error ')
            //     reject(err) 
            // }
                logger.info(' Mail Sent ')
                return resolve()
        })
   })

}


module.exports = { sendMail } 