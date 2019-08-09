/**
 * @file APP
 * @version 1.0.0
 */

//Imports and Declarations
const forecast = require('./api/forecast');
const geocode = require('./api/geocode');

const address = process.argv[2];

if ( !address){
    console.log('Enter a valid location')
}
else{
    geocode(address,(error,data) => {

        if(error){
            return console.log(error);
        }
        forecast(data.latitude,data.longitude,(error,msg) => {

            if(error){
                return console.log(error)
            }
            
            console.log(msg);
        });
    });
}

