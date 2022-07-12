const express = require('express')
const router = express.Router()
const persons = require('../database/controllers/persons')

router.get('/persons/find_all', (req, res) => {
    persons.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/persons/create', (req, res) => {
    persons.create(req.body.rut, req.body.name, req.body.phone, req.body.mail, req.body.gender, req.body.born).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

// router.post('/persons/find_one_by_name', (req, res) => {
//     persons.find_one_by_name(req.body.name).then(data => {
//         res.json(data)
//     }).catch(err => {
//         res.json(err)
//     })
// })

module.exports = router