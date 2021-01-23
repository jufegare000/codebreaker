const express = require('express');
const app = express();
const codeBreaker = require('./codebreaker.js');
let numberCodeBreaker = 0;
const bodyParser = require('body-parser').json();
  

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/activate', bodyParser, (req, res) => {
    const number = req.query.number;
    if (number.length > 4) {
        res.status(400);
        res.send("error");
    }else {
        numberCodeBreaker = number;
        res.send("Se ha ingresado el número: "+  numberCodeBreaker + " para code breaker");
    }
});


app.post('/codebreaker', bodyParser, (req, res) => {
    if(numberCodeBreaker !== 0){
        const numberx = req.query.number;
        let number = codeBreaker.codeBreaker(numberCodeBreaker, numberx);
        res.send(number);
    }else{
        res.status(400);
        res.send("error");
    }
});
 
module.exports = app;
