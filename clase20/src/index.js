const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');
const initializePassport = require('./config/passport.config');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/40305-sessions?retryWrites=true&w=majority',
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    }),
    secret: 'loQueQuieras',
    resave: false,
    saveUninitialized: false,
  })
);
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');

mongoose
  .connect(
    'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/40305-data?retryWrites=true&w=majority'
  )
  .then(response => console.log('db is connected'))
  .catch(error => console.log(error));

// const mongooseRun = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/40305-data?retryWrites=true&w=majority')
//     console.log('db is connected')
//   } catch (error) {
//     console.log(error)
//   }
// }

// mongooseRun()

router(app);

app.listen(3000, () => {
  console.log('Server on 3000');
});
