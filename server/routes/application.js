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

// router.get('/getApplication', applicationController.getAllApplications, (req, res) => {
//   res.status(200).json('res.locals.application');
// });
router.post('/updateApplication',
  applicationController.deleteUsersToJobs,
  applicationController.deleteJobsToCompanies,
  applicationController.deleteJob,
  applicationController.createJob,
  applicationController.addJobToUser,
  applicationController.getCompany,
  applicationController.createCompany,
  applicationController.addJobToCompany,
  (req, res) => {
    console.log("hi");
    return res.sendStatus(200);
  });


router.post('/deleteApplication',
  applicationController.deleteUsersToJobs,
  applicationController.deleteJobsToCompanies,
  applicationController.deleteJob,
//may want to add getAllApplications and sent the entire array of objects to the front for an update?
  (req, res) => {
    return res.sendStatus(200);
  }
);

module.exports = router;
