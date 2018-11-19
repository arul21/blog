const express = require('express')
const router = express.Router()
const users = require('./user-route')
const upload = require('../helpers/uploadHelper')
const articles = require('./article-route')
const category = require('./category-route')
const comment = require('./comment-route')

router.use('/users', users)
router.use('/articles', articles)
router.use('/category', category)
router.use('/comments', comment)


// router.post('/upload', upload.multer.single('image'), upload.sendUploadToGCS,
//            (req, res) => {
//     res.send({
//         status: 200,
//         message: 'Your file is successfully uploaded',
//         link: req.file.cloudStoragePublicUrl
//     })
// })

router.get('/', function(req, res, next) {
  res.send('Khairul Baharuddin')
})

module.exports = router