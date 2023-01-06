const http = require('http')

const server = http.createServer((request, response) => {
  response.end('hi server for coders!!!')
})

server.listen(8080, () => {
  console.log('server running at port 8080')
})