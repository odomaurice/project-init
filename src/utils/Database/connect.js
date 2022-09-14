
// Utils 
const config = require('config') 
const logger = require('../../health/logger/index') 


// Modules 
const mongoose = require('mongoose')

const DB_URI = config.get('dbUri') 

if( !DB_URI ){ logger.error('DB_URI empty ! ')}



const createDatabaseConnection = async function()
        {

            try 
            {
               

             const createConnection = async function()
                    {
                        try 
                        {
                            await mongoose.connect(DB_URI)
                        }
                        catch(err)
                        {
                            console.log(err) 
                        }
                    }

                
               createConnection() 
             
                const db = mongoose.connection 
    
                db.once('open',()=>{
                    logger.info(" Database Open ")
                })

                db.on('connected',()=>{
                    logger.info(" Database connected ")
                })

              
            }
            catch(err)
            {
                logger.error(err) 
            }
           
        }


module.exports = createDatabaseConnection