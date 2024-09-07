require('dotenv').config();
const bcrypt= require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is necessary"],
        unique:true    },
    password:{
        type:String,
        required:[true,"Password is necessary"],
        minlength:6
    },
    firstName:{
        type:String,
        required:[true,"Enter first name"]
    },
    lastName: String
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model("User",userSchema);
module.exports = User;
