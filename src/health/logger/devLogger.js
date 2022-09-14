const { transports, format, createLogger } = require('winston')
const {  printf, label, timestamp, combine, colorize, errors } = format 


const customFormat = printf(({level, message, label, timestamp, stack })=>{
    return `${timestamp} [${label}] [${level}]:  ${ stack || message }} `
})


const createDevLogger = function()
            {

                const logger = createLogger
                            (
                                {
                                    level:"info",
                                    transports:
                                    [
                                        new transports.Console() 
                                    ],
                                    format: combine
                                    (
                                        colorize(),
                                        label({ label:'Server Log'}), 
                                        timestamp(),
                                        errors({ "stack": true }),
                                        customFormat
                                    )
                                }
                            )


                return logger 
            }


module.exports = { createDevLogger } 