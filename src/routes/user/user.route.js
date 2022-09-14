const express = require('express')
const router = express.Router() 
const User = require('../../controller/user/user.controller')


module.exports = (app)=>
    {
        router.post('/signup', User.signup )

        app.use('/api', router )
    }  