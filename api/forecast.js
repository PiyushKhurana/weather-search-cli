const request = require('request');

const forecast = (latitude,longitude,callback)=>{
const url = `https://api.darksky.net/forecast/d09b1ae6d76b73ee88d3638f10d3a203/${latitude},${longitude}?units=si`;
request({url:url,json:true},(error,response)=>{
if (error){
    callback('Unable to connect to forecast service',undefined);

}
else if(response.body.error){
callback('Unable to find location ,Try  Another',undefined);
}
else{
    callback(undefined,response);
}
});
}
