const mongoose = require('mongoose')
const {ObjetId} = mongoose.Schema

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add a email'],
        unique:true,
        trim:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
        minLength:[6,'Password must be up to 6 characters'],
    },
    phone:{
        type:String,
    },
    address:{
        type:Object,
    },
    state:{
        type:Object,
    },
    country:{
        type:Object,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User

