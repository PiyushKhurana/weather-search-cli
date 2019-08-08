const request = require('request');

const url = 'https://api.darksky.net/forecast/d09b1ae6d76b73ee88d3638f10d3a203/28,77?units=si';

request({url:url,json:true},(error,response)=>{
    if(error){
        console.log('Unable to connect to weather service ');
    }
    else if(response.body.error){
        console.log('Unable to find location ');
    }
    
    else{
        msg = `It is currently ${response.body.currently.temperature} degree out . There is ${response.body.currently.precipProbability}% chance of rain.  `
        console.log(msg);
        console.log(response.body.timezone)
        console.log(response.body.currently.summary)

    }
    
})
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Delhi.json?access_token=pk.eyJ1IjoicXR5OTkyNyIsImEiOiJjanhyZTExdHYwNzJ6M25tajA0dWhiejN5In0.TAuSNln5JlRFoRWoYUDxDQ&limit=1'
request({url:geocodeUrl,json:true},(error,response)=>{
console.log(response.body.features[0].center[0])
console.log(response.body.features[0].center[1])
console.log(response.body.features[0].place_name)

})