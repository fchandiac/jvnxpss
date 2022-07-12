'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('persons', 
        {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        rut: {type: Sequelize.STRING, unique: true,},
        name: { type: Sequelize.STRING},
        gender: { type: Sequelize.STRING},
        phone: {type: Sequelize.STRING},
        mail: {type: Sequelize.STRING},
        born: {type: Sequelize.DATE},
        created_at: {type: Sequelize.DATE},
        updated_at: {type: Sequelize.DATE}
        },
        {
            initialAutoIncrement: 1001, 
        }
    )
},
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables() 
  }
};


