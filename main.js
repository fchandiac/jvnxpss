
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require('cors')

app.use(cors({ origin: '*' }))
app.use(require('./routes/persons'))
app.use(express.static(__dirname + '/out/'))

app.get('/data',function(req,res) {
    res.sendFile(__dirname + '/out/data.html');
});

app.get('/validate',function(req,res) {
    res.sendFile(__dirname + '/out/validate.html');
});

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/out/index.html');
});

app.listen(port, () => {
    console.log('server work! at port: ' + port)
})

