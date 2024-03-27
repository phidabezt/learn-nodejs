const getHomepage = (req, res) => {
  res.send('Hello World 2!')
}

const getEjs = (req, res) => {
  res.render('sample')
}

module.exports = {
  getHomepage,
  getEjs,
}