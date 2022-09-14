const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const bcrypt = require('bcrypt')
const crypto = require('crypto') 
const config = require('config') 


const UserSchema = new Schema 
        (
            {
                email:
                {
                    type: String,
                    required: true, 
                    unique: false, 
                    trim: true, 
                    minlength: 5 
                },
                firstname:
                {
                    type: String,
                    required: true,
                    trim: true, 
                    minlength: 5 
                },
                lastname:
                {
                    type: String,
                    required: true,
                    trim: true, 
                    minlength: 5 
                }, 
                password:
                {
                    type: String,
                    required: true, 
                    unique: true, 
                    trim: true, 
                    minlength: 5 
                }, 
                emailVerificationCode: 
                {
                    type: String, 
                    required: true, 
                    trim: true
                },
                emailVerified:
                {
                    type: Boolean, 
                    required: true, 
                    default: false 
                },
                isAdmin: 
                {
                    type: Boolean, 
                    required: true, 
                    default: false 
                }
            },
            {
                timestamps: true
            }
        )


        UserSchema.pre("save",async function(next){
            const user = this 

            if( !this.isModified('password') )
            {
                next() 
            }

            const salt = await bcrypt.genSaltSync( config.get('saltWorkFactor'))
            const hash = await bcrypt.hashSync( user.password, salt )

            this.password = hash
            
            return next() 
        })



        const User = mongoose.model('user', UserSchema)

        module.exports = User 