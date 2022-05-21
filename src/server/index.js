const path = require('path')
const express = require('express')
const cors = require('cors')
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

console.log(process.env.API_KEY)

const key_data = {
    key: process.env.API_KEY
}

console.log(key_data)

app.get('/key', function (req, res) {
    // res.sendFile('dist/index.html')
    res.json(key_data)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})