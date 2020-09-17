const path = require('path')

const express = require('express')

const hbs = require('hbs')

const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()
console.log(path.join(__dirname, '../public'))
const path1 = path.join(__dirname, '../templates/views')
const partialDir = path.join(__dirname, '../templates/partials')
console.log(__filename)
const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))
hbs.registerPartials(partialDir)


app.set('view engine', 'hbs')

app.set('views', path1)
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        desc: 'Get All Weather Information here'
    })
})
app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send('Enter with Query Data')
    }
    console.log('Working')
    res.send({
        products: []
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        desc: 'Created by dynamic template using hbs'

    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        desc: 'Created by dynamic template using hbs'


    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return  res.send({
            error:"Unable to Find Location,Try with another location(s)"
        })
    }

  else{
      const addressToSearch=req.query.address
    geoCode.geocode(addressToSearch, (error, data) => {
        if (error) {
          return  res.send({
              error:"Unable to Find Location"
          })
        }
        forecast(data.latitude, data.longitude, (error, forecastdata) => {
            if (error) {
                return res.send(error)
            }
            // console.log('Place: '+data.placeName)
            // console.log(forecastdata)
         res.send({
             place:data.placeName,
             latitude:data.latitude,
             longitude:data.longitude,
             forecast:forecastdata,
             address:req.query.address.toUpperCase(),
             

         })
        })
    })
  }

})
app.get('/contact', (req, res) => {
    res.send("Contact Page")
})

app.get('/about/*', (req, res) => {
    res.render('error', {
        title: "Error",
        desc: "Not further information found"
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: "Error",
        desc: "Error 404 found"
    })
})



app.listen(3000, () => {
    console.log("on 3000 port")
})