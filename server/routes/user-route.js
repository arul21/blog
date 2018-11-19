const express = require('express')
const router = express.Router()
const {signup, signin, getOne, getAll} = require('../controllers/user-controller')
const isLogin = require('../middlewares/isLogin')

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/one', getOne)
router.get('/', getAll)


module.exports = router