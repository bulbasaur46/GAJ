const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/create', 
  applicationController.createJob,
  applicationController.addJobToUser,
  (req, res) => {
  return res.sendStatus(200);
});

router.get('/all', applicationController.getAllApplications, (req, res) => {
  res.status(200).json({});
});

module.exports = router;
