"use strict";
var fetch = require('node-fetch');

var currency_converter = {};
var converted = 40;
// https://api.fixer.io/latest?base=USD&symbols=EUR,GBP
currency_converter.convert = function(from, amount) {




    var from = from.toUpperCase();





    let url = "https://api.fixer.io/latest?base=" + from + "&symbols=EUR";


    fetch(url)
        .then(response => {
            response.json().then(json => {
                converted = amount * json.rates.EUR
                console.log(converted);
                return converted;



            });
        })
        .catch(error => {
            console.log(error);
        });




};

module.exports = currency_converter;