const prpl = require('prpl-server');
const express = require('express');
const rendertron = require('rendertron-middleware');
const config = require('./build/polymer.json');
const app = express();
// const botUserAgents = [
//     'W3C_Validator',
//     'baiduspider',
//     'bingbot',
//     'googlebot',
// ];
// const botList = new RegExp(botUserAgents.join('|'), 'i');
app.use(rendertron.makeMiddleware({
    proxyUrl: 'https://render-tron.appspot.com/render',
    // userAgentPattern: botList,
}));
app.get('/*', prpl.makeHandler('./build/', config));

app.listen(8080);