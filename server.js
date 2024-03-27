const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

app.get('/', (req, res) => {
  res.send('Hello World 2!')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})