const express = require('express')
const app = express()
const serveIndex = require('serve-index');

app.get("/", (req, res) => {
    res.send(console.log('Visualization of Sorting algorithms'))
})

app.listen(3000, () => {
    console.log(`Server listening at port 3000`)
})

app.use('/test', (req, res, next)=>{
    console.log('Request type: ', req.method)
    next()
})

app.use('/public', express.static('public'))
app.use('/public', express.static('algorithms'))
app.use('/public', express.static('assets'))
app.use('/public', serveIndex('public'))

