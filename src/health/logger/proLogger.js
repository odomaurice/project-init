const {createLogger, format, transports } = require('winston')
const  { simple} = format 

function createProLogger()
{
    const logger = createLogger 
            (
                {
                    level:"info",
                    transports:
                    [
                        new transports.Console() 
                    ],
                    format: simple() 
                }
            )


    return logger 
}





module.exports = { createProLogger }