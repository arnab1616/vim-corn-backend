const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   googleId:{
    type:Number,
    required: true,
    unique: true,
   },
   name:{
    type:String,
    required: true,
    unique: true,
   },
   email:{
    type:String,
    required: true,
    unique: true,
   } 
})