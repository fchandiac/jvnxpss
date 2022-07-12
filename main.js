
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

app.listen(port, () => {
    console.log('server work! at port: ' + port)
})

