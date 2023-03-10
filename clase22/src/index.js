const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const initializePassport = require('./config/passport.config');
const router = require('./router');

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(morgan('dev'));
initializePassport();
app.use(passport.initialize());

router(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
