const File = require("../model/File");
const cloudinary = require('../config/cloudinary')
const fs = require('fs')

const uploadFile = async (req, res) => {
    // recieve file
    //  check the file
    // upload file
    // clean

    try {
        if (!req.file) return res.status(400).json({ message: "no file recieved" });

        const uploadResult = await cloudinary.uploader
            .upload(req.file.path, {
                resource_type: 'auto'
            })
            .catch((error) => {
                console.log(error);
            });

        fs.unlinkSync(req.file.path);

        const file = new File({
            filename: req.file.originalname,
            size: req.file.size,
            path: req.file.path,
            url: uploadResult.secure_url
        })

        await file.save()

        res.status(200).json({
            message: "file uploaded successfully",
            file
        })

    } catch (error) {
        res.send(500).json({
            message: "error while uploading file",
            error: error.message
        })
    }
}

module.exports = uploadFile

//  expiry date

//  file + expiry date

