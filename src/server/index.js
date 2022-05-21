const path = require('path')
const express = require('express')

const dotenv = require('dotenv')
dotenv.config({path: __dirname + '/.env'})
  
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

const key_data = {
    key: process.env.API_KEY
}

app.get('/key', function (req, res) {
    // res.sendFile('dist/index.html')
    res.json(key_data)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})