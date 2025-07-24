const File = require("../model/File")

async function downloadFile(req, res) {

    try {
        const id = req.params.id
        const file = await File.findById(id)

        if (!file) {
            return res.status(400).json({
                message: "no file found",
            })
        }
        res.redirect(file.url)
    } catch (error) {
        res.send(500).json({
            message: "error while downloading file",
            error: error.message
        })
    }
}

module.exports = downloadFile