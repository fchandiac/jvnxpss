const {Persons} = require('../db')
const {Addresses} = require('../db')
const persons = {}

async function findAll(){
    const person = await Persons.findAll({include: Addresses}).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return person
}

async function create (rut, name, phone, mail, gender, born){
    const person = await Persons.create({
        rut: rut,
        name: name,
        phone: phone,
        mail: mail,
        gender: gender,
        born: born

    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return person
}

async function findOneByRut(rut){
    const person = await Persons.findOne({
        where: {rut:rut}
    }).then(data => { return {'code': 1, 'data':data}}).catch(err => {return {'code': 0, 'data':err}})
    return person
}

persons.findAll = findAll
persons.create = create
persons.findOneByRut = findOneByRut

module.exports = persons