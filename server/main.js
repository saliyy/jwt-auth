require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const mainApiRoutes = require('./routes/mainApi');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const bodyParser = require('body-parser');

// config app
const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// routes
app.use('/api/auth', authRoutes);
app.use('/api', mainApiRoutes);
// server start listening
const PORT = process.env.PORT || 5000;
const start = () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION_STRING, () => {
      console.log('db connection established!');
    });

    app.listen(PORT, () => console.log('server started'));
  } catch (ex) {
    console.log('server start error!', ex);
  }
};

start();
