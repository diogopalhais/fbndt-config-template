'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Server NodeJS \n');
});

app.get('/api', (req, res) => {
    res.json({status:"ok"});
});

const port = process.env.PORT || 3001;

app.listen(port);
console.log(`Running on port:${port}`);