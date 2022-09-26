const express = require("express")

const upload=require('../helpers/filehelper');
const singleupload=require('../controllers/fileuploadcontroller');
const multipleUpload=require('../controllers/fileuploadcontroller');
const router = express.Router();

router.post('/single',upload.single('file'), singleupload)
router.post('/multiple',upload.array('files'), multipleUpload)

module.exports={router:router
}