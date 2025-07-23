const multer = require('multer')


const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        const prefix = Date.now()
        cb(null, prefix + "-" + file.originalname)
    }

})

module.exports = multer({ storage })