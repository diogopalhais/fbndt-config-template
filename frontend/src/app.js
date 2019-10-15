'use strict';

const express = require('express');
const axios = require('axios');

const api_url = process.env.API_URL;

const app = express();
app.get('/', (req, res) => {
    res.send(`Frontend NodeJS \n`);
});

app.get('/call-backend', (req, res) => {
    
    axios.get(api_url)
        .then(response => {
            res.send(response.data)
        })
    .catch(error => res.send(`error: ${error} \n`) );

});

app.get('/call-placeholder', (req, res) => {
    
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(json => res.send(json.data) )
    .catch(error => res.send(`error: ${error} \n`) );

});

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Running on port:${port}`);
console.log(`API_URL :${process.env.API_URL}`);