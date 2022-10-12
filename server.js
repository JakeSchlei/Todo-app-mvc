const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controller')

// config for handlebars
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// we set up handlebars and connect it with express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

