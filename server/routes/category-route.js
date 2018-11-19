const express = require('express')
const router = express.Router()
const {addCategory, getAll} = require('../controllers/category-controller')

router.post('/', addCategory)
router.get('/', getAll)




module.exports = router