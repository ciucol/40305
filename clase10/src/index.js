const express = require('express');
const handlebars = require('express-handlebars');

const port = 3000

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + 'views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
});