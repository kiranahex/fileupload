const singleFileUplaod = require("../models/fileschema")
const multipleFiles = require('../models/multipleFiles')

const singleUpload = async (req,res)=>{
    try {
        const file = new singleFileUplaod({
            filename: req.file.originalname,
            filepath: req.file.path,
            filetype: req.file.mimetype
        })
        await file.save()

        res.status(201).send("file uploaded")
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = singleUpload

const multipleUpload = async (req,res)=>{
    try {
      let fileArray=[];
      req.files.forEach(element => {
        const file={
            filename:element.originalname,
            filepath:element.path,
            filetype:element.mimetype
        }
        fileArray.push(file)
      });
      const multiple= new multipleFiles({
        title:req.body.title,
        files:fileArray
      })
      await multiple.save()
        res.status(201).send("files uploaded")
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = multipleUpload
    
