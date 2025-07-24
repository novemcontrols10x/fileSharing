const express = require('express')
const upload = require('../middleware/upload')
const uploadFile = require('../controllers/fileController')
const downloadFile = require('../controllers/downloadController')


const fileRouter = express.Router()


fileRouter.get('/', (req, res) => {
    res.send('welcome to file routes')
})

fileRouter.post('/upload', upload.single('file'), uploadFile)

fileRouter.get('/downloadfile/:id', downloadFile)
// file upload routes
// file download



module.exports = fileRouter