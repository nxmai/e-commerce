const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControllers')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register);

router.post('/login', userCtrl.login);

router.get('/addcart', auth, userCtrl.addCart)

router.post('/logout', userCtrl.logout);
 
router.get('/token', userCtrl.refreshToken);

module.exports = router;