const mongoose = require ('mongoose')

const fileSChema = new mongoose.Schema({
    filename:{
        type:String,
        required:true,
        unique:true
    },
    filepath:{
        type:String,
        required:true,
        
    },
    filetype:{
        type:String,
        required:true,

    }
},{timestamps:true})

const singleFileUplaod = new mongoose.model('singleFileUplaod',fileSChema)

module.exports=singleFileUplaod;