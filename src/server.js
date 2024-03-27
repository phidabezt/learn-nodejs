const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME


// template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// static files
app.use(express.static(path.join(__dirname, 'public')))

// route
app.get('/', (req, res) => {
  res.send('Hello World 2!')
})

app.get('/ejs', (req, res) => {
  res.render('sample')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})