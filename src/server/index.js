const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const routes = require('../routes');

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'../public/static')));

app.use('/api', routes);

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'../public/index.html')));

module.exports = app;
