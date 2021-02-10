const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({
    dest:"uploaded_files",
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(png|jpg|jpeg)/i)){
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
})
router.post("/", upload.single("upload"), (req,res)=>{
    res.send();
});

module.exports = router;