require('dotenv').config()


const { createDevLogger} = require('./devLogger') 
const { createProLogger } = require('./proLogger')

const NODE_ENVIRONMENT = process.env.NODE_ENV.trim() 
var logger = null 

if( NODE_ENVIRONMENT === 'development' )
{
    logger = createDevLogger()
    logger.info(' Dev Logger Created')
}
else if( NODE_ENVIRONMENT === 'production' )
{
    logger = createProLogger()
    logger.info(' Pro Logger Created ')
}
else 
{
    console.log(" Unknown Node Environment") 
}

module.exports = logger 