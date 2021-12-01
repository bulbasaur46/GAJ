const db = require('../models/applicationTrackerModel');

const userController = {};

userController.logIn = (req, res, next) => {
  console.log('request body: ', req.body);
  const queryText = 'SELECT * FROM users WHERE email = \'' + String(req.body.email) + '\';';
  db.query(queryText, (err, result) => {
    if (err){
      return next(err);
    } else {
      const userInfo = result.rows[0];
      // check user exists
      if (!userInfo) {
        return next({ status: 400, message: {err: 'no user with that email'}});
      }
      // check password matches
      if (req.body.password !== userInfo.password) {
        return next({ status: 400, message: {err: 'password does not match'}});
      }
      res.locals.userInfo = userInfo;
      // console.log('result', result);
      res.cookie('user_id', userInfo._id);
      return next();
    }
  });
};


// stretch
userController.deleteUser = (req, res, next) => {

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
    // .then(data => {
    //   // res.locals = data;
    //   // res.locals.message = 'Account Successfully Created, Please Log in';
    // })
    .then(data => next())
    .catch(err => next(err));
};

module.exports = userController;
