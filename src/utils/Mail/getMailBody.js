const logger = require('../../health/logger/index') 
const fs = require('fs')
const hbs = require('handlebars') 

const emailOptions = 
{ signup:{ from:"support@videoLab.com", 'subject':" VideoLab Signup Successful ", text:"Click on the link to complete signup" }}



const getMailBody = async function( receiverEmail, emailName, variables)
            {
                return new Promise(async (resolve, reject)=>{
                    try 
                    {
                        const htmlFile = await fs.promises.readFile( __dirname +'/Templates/'+ emailName + '.html',"utf-8")
                        const newHtmlFile = hbs.compile(htmlFile) 
                        const finalHtmlFile = newHtmlFile(variables) 

                        logger.info(' Fetched html file ')

                        const mailBody = 
                        {
                            from: emailOptions[emailName].from, 
                            to: receiverEmail, 
                            subject: emailOptions[emailName].subject,
                            text: emailOptions[emailName].text, 
                            html: finalHtmlFile
                        }

                        logger.info(' Created Mail Body ')

                        resolve( mailBody ) 
                    }
                    catch(err)
                    {
                        logger.error(' Error occured while reading template file ')
                        logger.error(err)
                        reject(err)
                    }
                })
            }



module.exports = { getMailBody } 