const multer=require('multer')


const filestorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    },
  });

  const fileFilter= (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("only .png, .jpg, .jpeg format is allowed!"));
    }
  }
  const upload = multer({
    storage: filestorage,fileFilter:fileFilter
    
  });

  module.exports=upload;