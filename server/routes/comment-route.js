const express = require('express')
const router = express.Router()
const {isLogin} = require('../middlewares/isLogin')
const {addComment, deleteById, getComment, getAll} = require('../controllers/comment-controller')

router.post('/:article',isLogin, addComment)
router.delete('/:id', deleteById)
router.get('/', getComment)
router.get('/:article', getAll)

module.exports = router