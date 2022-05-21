var path = require('path')
const express = require('express')
var cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');

dotenv.config();

const app = express()

app.use(cors())

app.use(express.static('dist'))


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

const key_data = {
    key: "7a3532bda0f42b49ae838c5ed81a398c"
}

app.get('/key', function (req, res) {
    // res.sendFile('dist/index.html')
    res.json(key_data)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})