/**
 * @file Forecast 
 * @version 1.0.0
 */

//Imports and Declarations
const request = require('request');

const forecast = (latitude,longitude,callback) => {

    const url = `https://api.darksky.net/forecast/d09b1ae6d76b73ee88d3638f10d3a203/${latitude},${longitude}?units=si`;

    request({ url, json:true },(error, { body }) => {

        if (error){
            callback('Unable to connect to forecast service',undefined);
        }
        else if(body.error){
            callback('Unable to find location ,Try  Another',undefined);
        }
        else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.');
        }
    });
}

module.exports = forecast;