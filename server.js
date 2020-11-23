const express = require('express')
const app = express()
const serveIndex = require('serve-index');

app.get("/app", (req, res) => {
    res.send(console.log('Visualization of Sorting algorithms'))
})

app.listen(3000 || process.env.PORT, () => {
    console.log(`Server listening at port 3000`)
})

app.use('/test', (req, res, next)=>{
    console.log('Request type: ', req.method)
    next()
})

app.use('/', express.static('public'))
app.use('/', express.static('algorithms'))
app.use('/', express.static('assets'))
app.use('/', serveIndex('public'))

