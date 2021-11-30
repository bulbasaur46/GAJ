const db = require('../models/applicationTrackerModel');

const applicationController = {};

// might break down
applicationController.createJob = (req, res, next) => {
  // get job data
  // only take the properties in job
  const dataProperties = ['application', 'job_title', 'wage', 'date_posted', 
    'date_of_application', 'url', 'recruiter_name', 'recruiter_email', 'status',
    'to_do_list','notes', 'reminder'];
  
  let queryText = 'INSERT INTO jobs (' + dataProperties.join(', ') + ')';
  const values = [];
  for (const prop of dataProperties) {
    values.push(JSON.stringify(req.body[prop]));
  }
  queryText += ' VALUES (' + values.join(', ') + ') + RETURNING _id;';

  // insert into db
  db.query(queryText, (err, result) => {
    if (err) {
      return next({message: {err: 'error in applicationController.createJob'}});
    }
    console.log('result of insert job', result);
    // get id of job and save to res.locals
    res.locals.job_id = result.rows[0]._id;
    return next();
  });

};

applicationController.addJobToUser = (req, res, next) => {
  // use job_id from res.locals and user_id from res.cookies.user_id
  return next();
};

applicationController.createCompany = () => {

};




applicationController.getAllApplications = () => {
  // console.log(document.cookie);
  const queryText = 'SELECT *' +
    'FROM jobs' +
    'RIGHT JOIN user.id = ' +
    'ON users._id = usersToJobs.user_id' +
    
    'WHERE users.email = \'' + String(req.cookies.validUser) + '\';';

  db.query(queryText, () => {
    
  });
};

applicationController.getApplication = () => {

};

// might need to be broken down further
applicationController.updateApplication = () => {

};

applicationController.deleteApplication = () => {

};

module.exports = applicationController;