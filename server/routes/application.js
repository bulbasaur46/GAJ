const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/create', 
  applicationController.createJob,
  applicationController.addJobToUser,
  applicationController.getCompany,
  applicationController.createCompany,
  applicationController.addJobToCompany,
  (req, res) => {
    return res.sendStatus(200);
  }
);

router.get('/all', applicationController.getAllApplications, (req, res) => {
  res.status(200).json(res.locals.applications);
});

router.get('/getApplication', applicationController.getAllApplications, (req, res) => {
  res.status(200).json('res.locals.application');
});

module.exports = router;
