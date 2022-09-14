// Routers 
const userRouter = require('./user/user.route')


function createRoutes(app)
{
    userRouter(app) 
}


module.exports = { createRoutes }