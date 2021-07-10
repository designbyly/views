const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const hostname = '127.0.0.1'
const port = 3000
const app = express()
app.use(express.static(path.join(__dirname, 'Ajax实例')))
app.use(bodyParser.json())
app.get('/get', (req, res) => {
    res.send('服务器响应了'+req.query)
})
app.post('/post', (req, res) => {
    res.send('服务器响应了'+req.body)
})
app.listen(port, hostname, () => {
    console.log(`小薇的服务器已经在 http://${hostname}:${port}/成功运行`)
})