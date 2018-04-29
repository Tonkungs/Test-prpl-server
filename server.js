const prpl = require('prpl-server');
const express = require('express');
const config = require('./build/polymer.json');
const app = express();

app.get('/*', prpl.makeHandler('./build/', config));

app.listen(8080);