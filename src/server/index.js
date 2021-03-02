const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const routes = require('../routes');

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/api', routes);

module.exports = app;
