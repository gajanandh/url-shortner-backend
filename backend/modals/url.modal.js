const mongoose = require('mongoose');
const {Schema} = require('mongoose');



const urlSchema = new Schema({
    full:{
        type :String,
        required:true,
    },
    short:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('URl',urlSchema)