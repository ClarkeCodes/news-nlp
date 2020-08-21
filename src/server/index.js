const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
// const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');
const cloudApi = process.env.API_KEY;
let userData = {};
let userText;
// const apiEndpoint = 'https://api.meaningcloud.com/sentiment-2.1';
const app = express();


// console.log(__dirname)
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'));
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 8081!');
})

// app.get('/test', function (req, res) {
//     console.log(mockAPIResponse);
// })

app.post('/userData', function(req, res) {
    userData = req.body;
    userText = req.body.input;
    res.send(userData);

});

// const analyzeText = async(inputText) => {
//     const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&txt=${inputText}`);
//     try {
//         const data = await response.json();
//         console.log("TEST", data);
//         return data;
//     } catch(error) {
//         console.log("Error", error);
//     }
// }