const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRouter = require('./routes/user');
const applicationRouter = require('./routes/application');


const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/user', userRouter);
app.use('/api/application', applicationRouter);

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));



app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
