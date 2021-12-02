const db = require('../models/applicationTrackerModel');

const applicationController = {};


applicationController.createJob = (req, res, next) => {
  // get job data
  console.log('WE MADE IT HERE!!!');

  // only take the properties in job
  const dataProperties = ['company', 'industry', 'job_title', 'wage', 'date_posted', 'date_of_application', 
    'url', 'recruiter_name', 'recruiter_email', 'status', 'to_do_list', 'notes', 'reminder'];
  let queryText = 'INSERT INTO jobs (' + dataProperties.join(', ') + ')';
  const values = [];
  for (const prop of dataProperties) {
    const value = req.body[prop];
    if (value === undefined) values.push('null');
    else if (typeof value === 'string') values.push("'" + value + "'");
    else values.push(value);
  }
  queryText += ' VALUES (' + values.join(', ') + ') RETURNING _id;';
  // insert into db
  db.query(queryText, (err, result) => {
    if (err) {
      return next({message: {err: 'error in applicationController.createJob'}});
    }
    // get id of job and save to res.locals
    res.locals.job_id = result.rows[0]._id;
    return next();
  });
};

applicationController.addJobToUser = (req, res, next) => {
  // use job_id from res.locals and user_id from res.cookies.user_id
  const queryText = 'INSERT INTO usersToJobs (user_id, job_id) VALUES (' + 
    req.cookies.user_id + ', ' + res.locals.job_id + ');';
  
  db.query(queryText, (err, result) => {
    if (err) {
      return next({message: {err: 'error in applicationController.addJobToUser'}});
    }
    return next();
  });
};

// sets res.locals.company_id
applicationController.getCompany = (req, res, next) => {
  const queryText = 'SELECT * FROM companies WHERE name=\'' + req.body.company + '\';';
  db.query(queryText, (err, result) => {
    if (err) return next({message: {err: 'error in applicationController.getCompany'}});
    if (result.rows.length) {
      res.locals.company_id = result.rows[0]._id;
    }
    return next();
  });
};

applicationController.createCompany = (req, res, next) => {
  // if company already exists, don't create a new one
  if (res.locals.company_id) return next();

  const name = req.body.company;
  const industry = req.body.industry ? req.body.industry : 'null';

  // if res.locals.company_id does not exist, make a new company
  const queryText = 'INSERT INTO companies (name, industry) VALUES (\'' + name + '\', \'' + industry + '\') RETURNING _id;';
  db.query(queryText, (err, result) => {
    if (err) return next({message: {err: 'error in applicationController.createCompany'}});
    res.locals.company_id = result.rows[0]._id;
    return next();
  });

};

applicationController.addJobToCompany = (req, res, next) => {
  const queryText = 'INSERT INTO jobsToCompanies (job_id, company_id) VALUES (' +
    res.locals.job_id + ', ' + res.locals.company_id + ');';
  db.query(queryText, (err, result) => {
    if (err) return next({message: {err: 'error in applicationController.addJobToCompany'}});
    return next();
  });
};



applicationController.getAllApplications = (req, res, next) => {
  const queryText =
    'SELECT * ' +
    'FROM users ' +
    'JOIN usersToJobs ON usersToJobs.user_id = users._id ' +
    'JOIN jobs ON jobs._id = usersToJobs.job_id ' +
    'JOIN jobsToCompanies ON jobsToCompanies.job_id = jobs._id ' +
    'INNER JOIN companies ON companies._id = jobsToCompanies.company_id ' +
    `WHERE users.email = '${req.cookies.validUser}';`;
    // 'WHERE users.email = \'cl@bla.com\';';
  db.query(queryText, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.locals.applications = data.rows;
      return next();
    }
  });
};

applicationController.getApplication = (req, res, next) => {
  const queryText =
    // "SELECT *" +
    // "FROM users" +
    // "INNER JOIN usersToJobs ON usersToJobs.user_id = users_id" +
    // "INNER JOIN jobs ON jobs._id = usersToJobs.job_id" +
    // "INNER JOIN jobsToCompanies ON jobsToCompanies.job_id = jobs._id" +
    // "INNER JOIN companies ON companies._id = jobsToCompanies.company_id" +
    // `WHERE users.email = ${req.cookies.validUser} AND ;`;
  db.query(queryText, (err, data) => {
    if (err) {
      // console.log(err);
      return next(err);
    } else {
      console.log("data", data);
      res.locals.application = data;
    }
  });
  return next();
};

applicationController.updateApplication = (req, res, next) => {

};

//May need to put the req.body["_id"] in quotes
applicationController.deleteUsersToJobs = (req, res, next) => {
  const deleteQuery = `DELETE FROM usersToJobs WHERE job_id = ${req.body["job_id"]};`;
  db.query(deleteQuery, (err, data) => {
    if (err) return next(err);
    return next();
  });
};

//May need to put the req.body["_id"] in quotes
applicationController.deleteJobsToCompanies = (req, res, next) => {
  const deleteQuery = `DELETE FROM jobsToCompanies WHERE job_id = ${req.body["job_id"]};`;
  db.query(deleteQuery, (err, data) => {
    if (err) return next(err);
    return next();
  });
};

//May need to put the req.body["job_id"] in quotes
applicationController.deleteJob = (req, res, next) => {
  const deleteQuery = `DELETE FROM jobs WHERE _id = ${req.body["job_id"]};`;
  db.query(deleteQuery, (err, data) => {
    if (err) return next(err);
    return next();
  });
};

module.exports = applicationController;