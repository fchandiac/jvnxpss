const {Sequelize, DataTypes} = require('sequelize');
const db = {};

db.connection = new Sequelize(process.env.JOVEN_DB,process.env.JOVEN_DB_USER,process.env.JOVEN_DB_PASS, {host: 'localhost', dialect: "mysql"})



db.Persons = require('./models/persons')(db.connection, DataTypes)



module.exports = db;
