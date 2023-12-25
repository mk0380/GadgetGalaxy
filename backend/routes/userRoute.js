const express = require('express')
const { registerUser, loginUser, updateUser, getUser } = require('../controllers/userController')
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/updateUser', updateUser)
router.post('/getUser', getUser)

module.exports = router