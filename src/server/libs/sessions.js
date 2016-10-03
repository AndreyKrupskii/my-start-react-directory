const mongoose = require('./mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

module.exports =  session({
  secret: 'HA-ha! My secret key!',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: null,
    httpOnly: true,
    path: '/'
  },
  store: new MongoStore({mongooseConnection: mongoose.connection})
});