
const forecast = require('./api/forecast');
const geocode = require('./api/geocode');

geocode('',(error,data)=>{
    if(error){
        return console.log(error);
    }
    forecast(data.latitude,data.longitude,(error,msg)=>{
        if(error){
            return console.log(error)
        }
        console.log(msg);
    })
})


