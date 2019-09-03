const http = require('http')

const server = http.createServer((request, response) => {
    // response.setHeader('Content-Type', 'text/html')
    console.log('method', request.method);
    console.log('url', request.url);
    const user = {
        name: 'seun',
        hobby: 'sleep'
    }

    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(user))
})

server.listen(3000)