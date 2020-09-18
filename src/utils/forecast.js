const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6d54790874d28f49a852a166ffc52076&query=' + longitude + ',' + latitude + '&units=m'

    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            // callback(undefined, ' It is currently ' + response.body.current.temperature + ' degress out. There is ' + response.body.current.weather_descriptions[0] + ' weather.It is likely ' + response.body.current.precip * 100 + '% precipatation.Wind Speed is ' + response.body.current.wind_speed)
   
        callback(undefined,{
            time:response.body.location.localtime,
            temp:response.body.current.temperature+" degree",
           preci: response.body.current.precip*10+"% percipitation",
           wind:response.body.current.wind_speed+" km/h",
           humid:response.body.current.humidity
       

        })
        
        }
    })
}

module.exports = forecast