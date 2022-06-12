const Sequelize = require('sequelize'); 

const {sequelize} = require('lib/sequelize'); 

const Attachment = require('./attachment');

const Page = sequelize.define('page', 
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
        poll_id: {
            type: Sequelize.INTEGER, 
            allowNull: false,
        }, 
    }, 
    {
        sequelize,
        tableName: 'pages',
        timestamps: false,
        underscored: true
    }
);

Attachment.belongsTo(Page, {as: 'page'});

Page.hasMany(
    Attachment, 
    {
        foreignKey: 'page_id',
        as: 'attachments',
    }
);

module.exports = Page;