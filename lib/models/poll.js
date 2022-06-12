const Sequelize = require('sequelize'); 

const {sequelize} = require('lib/sequelize'); 

const Page = require('./page');

const Poll = sequelize.define('poll', 
    {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        title: {
            type: Sequelize.STRING, 
            allowNull: false
        },
        description: {
            type: Sequelize.STRING, 
            allowNull: false
        },
    }, 
    {
        sequelize,
        tableName: 'polls',
        timestamps: false,
        underscored: true
    }
);

Page.belongsTo(Poll, {as: 'poll'});

Poll.hasMany(
    Page, 
    {
        foreignKey: 'poll_id',
        as: 'pages',
    }
);

module.exports = Poll;