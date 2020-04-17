Trash = require('../models/trash')

exports.index = (req, res) => {
    Trash.get(function (err, trash) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "Trash retrieved successfully",
            data: trash
        })
    })
}

