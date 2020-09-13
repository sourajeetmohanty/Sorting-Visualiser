const express = require('express')
const path = require('path');

const server = express()
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

server.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})
server.use(express.static(path.join(__dirname, 'public')));
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
