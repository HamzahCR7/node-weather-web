const request=require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGFtemFoY3I3IiwiYSI6ImNrZXA3Mmk4aDA5MHoycXA2NTdrYjN4ZXkifQ.BEKqEMGnlOEPNeWvU2x97Q&limit=1'
    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (response.body.features[0].length === 0) {
            callback('Error in finding locations', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                placeName:response.body.features[0].place_name

            })
        }
    })

}



module.exports={geocode}