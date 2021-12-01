const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/getUserData', userController.logIn, (req, res) => {
  return res.status(200).json(res.locals.userInfo);
});

router.post('/create', userController.createUser, (req, res) => {
  return res.status(200).send(res.locals.message);
});


module.exports = router;
