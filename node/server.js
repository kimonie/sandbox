const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(3000);

app.get('/about', (req, res) => {
    res.send('about us')
});

app.get('/profile', (req, res) => {
    res.send('getting profile')
});

app.post('/profile', (req, res) => {
    console.log(req.body);
    const user =  {
        name: 'sally',
        hobby: 'chilling'
    }

    res.send(user);
})









//CREATING SERVER USING NODE HTTP

// const http = require('http')

// const server = http.createServer((request, response) => {
//     // response.setHeader('Content-Type', 'text/html')
//     console.log('method', request.method);
//     console.log('url', request.url);

//     const user = {
//         name: 'seun',
//         hobby: 'sleep'
//     }

//     response.setHeader('Content-Type', 'application/json')
//     response.end(JSON.stringify(user))
// })

// server.listen(3000)