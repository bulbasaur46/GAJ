const cookieController = {};

cookieController.createCookie = (req, res, next) => {
  res.cookie("validUser", req.body.email);
  return next();
};

cookieController.deleteCookie = (req, res, next) => {
  res.clearCookie('validUser');
  return next();
};
  
module.exports = cookieController;