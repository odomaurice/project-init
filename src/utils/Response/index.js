const ServerError = (msg, res)=>
                    {
                        return res.status(500).json({ success: false, msg })
                    } 



module.exports = { ServerError }