const mongoose =require('mongoose')

const multipleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    files:[Object]
})

const multipleFiles= new mongoose.model('multipleFiles',multipleSchema)

module.exports=multipleFiles;