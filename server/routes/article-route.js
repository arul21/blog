const express = require('express')
const router = express.Router()
const {isLogin} = require('../middlewares/isLogin')
const {addArticle, getAll, putById, deleteById} = require('../controllers/article-controller')

router.post('/',isLogin, addArticle)
router.get('/', getAll)
router.put('/:id',putById)
router.delete('/:id', isLogin, deleteById)


module.exports = router