var path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');


const app = express();

// console.log(__dirname)
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'));

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log(`Your API key is ${process.env.API_KEY}`);
    console.log('Example app listening on port 8080!');
})

app.get('/test', function (req, res) {
    console.log(`Your API key is ${process.env.API_KEY}`);
    console.log(mockAPIResponse);
    res.send(process.env.API_KEY);
})
