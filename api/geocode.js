const request = require('request');

const geocode = (address,callback) => {

    url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicXR5OTkyNyIsImEiOiJjanhyZTExdHYwNzJ6M25tajA0dWhiejN5In0.TAuSNln5JlRFoRWoYUDxDQ&limit=1`;
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to geocoding service',undefined);

        }
        else if(response.body.features.length===0){
            callback('Unable to find location ,Try  Another',undefined);
        }
        else {
            callback(undefined,response);
        }
    })
}
