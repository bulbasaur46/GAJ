const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

router.get('/logIn', userController.logIn, cookieController.createCookie, (req, res) => {
  return res.status(200).json(res.locals.userInfo);
});

router.post('/create', userController.createUser, (req, res) => {
  return res.sendStatus(200);
});

router.post('/logOut', cookieController.deleteCookie, (req, res) => {
  return res.sendStatus(200);
});

// router.post('/verifyUser', userController.verifyUser, (req, res) => {
  
//   return res.status(200).json({ something: "fill in this!" });
// });

module.exports = router;
