const express = require('express')
const app = express()
const serveIndex = require('serve-index');

app.set('port', process.env.PORT || 3000)

app.use('/', express.static('public'))
app.use('/', express.static('algorithms'))
app.use('/', express.static('assets'))
app.use('/', serveIndex('public'))

app.listen(app.get('port'), () => {
    console.log("App running on port: " + app.get('port'))
})

module.exports = app
