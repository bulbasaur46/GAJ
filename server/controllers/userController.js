const db = require('../models/applicationTrackerModel');

const userController = {};

userController.getUser = (req, res, next) => {
  const queryText = 'SELECT * FROM users WHERE username = \'' + String(req.query.username) + '\';';
  db.query(queryText, (err, result) => {
    if (err){
      return next(err);
    } else {
      const userInfo = result.rows[0];
      if (!userInfo) {
        return next({ status: 400, message: {err: 'no user by that username'}});
      }
      res.locals.userInfo = userInfo;
      return next();
    }
  });
};

userController.createUser = (req, res, next) => {
  console.log("this is the req.body", req.body);
  const createUserQuery = 'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)';
  const params = [
    req.body.username,
    req.body.password,
    req.body.email
  ];
  db.query(createUserQuery, params)
    .then(data => {
      // res.locals = data;
      res.locals.message = 'Account Successfully Created, Please Log in';
    })
    .then(data => next())
    .catch(err => next(err));
};



module.exports = userController;
