const Sequelize = require('sequelize'); 

const {sequelize} = require('../sequelize'); 

const File = sequelize.define("file",{ 
    id: {
        type: Sequelize.UUID, 
        primaryKey: true, 
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    type: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    attachment_id: {
        type: Sequelize.UUID, 
        allowNull: false,
    }
},  {
    sequelize,
    tableName: 'files',
    timestamps: false,
    underscored: true
});

module.exports = File;