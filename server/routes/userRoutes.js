const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControllers')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register);

router.post('/login', userCtrl.login);

router.get('/addcart', auth, userCtrl.addCart);

router.post('/logout', userCtrl.logout);

router.get('/infor', auth, userCtrl.getUser);
  
router.get('/refresh_token', userCtrl.refreshToken);

module.exports = router;