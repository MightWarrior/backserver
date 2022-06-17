const Sequelize = require('sequelize'); 

const {sequelize} = require('lib/sequelize'); 

const File = require('./file');

const Attachment = sequelize.define('attachment', 
    {
        id: {
            type: Sequelize.UUID, 
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
        votes: {
            type: Sequelize.INTEGER, 
            allowNull: false,
        }, 
        page_id: {
            type: Sequelize.UUID, 
            allowNull: false,
        }
    }, 
    {
        sequelize,
        tableName: 'attachments',
        timestamps: false,
        underscored: true
    }
);

File.belongsTo(Attachment, {as: 'attachment'});

Attachment.hasMany(
    File, 
    {
        foreignKey: 'attachment_id',
        as: 'files',
    }
);

module.exports = Attachment