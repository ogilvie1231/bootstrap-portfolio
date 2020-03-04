var path = require('path')

module.exports = function(app) {

    app.get('/contact', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/pages/contact.html'))
    })

    app.get('/portfolio', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/pages/portfolio.html'))
    })
}