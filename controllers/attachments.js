const { sequelize } = require('../lib/sequelize');
const Attachment = require('lib/models/attachment');
const File = require('lib/models/file');

const getAttachments = async () => {
    try{
        const files = await Attachment.findAll({
            include: [{
                model: File, 
                as: 'files'
            }]
        });
        console.log(JSON.stringify(files));
        return files;
    } catch (err) {
        console.log('Here error', err);
    }
};

const createAttachment = ({}) => {

};

const voteForAttachment = async (id) => {
    try{
       const updatedAttachment = await Attachment.update({
            votes: sequelize.literal('votes + 1') 
            }, {
            where: {
                id: id
            }
        });
        return updatedAttachment;
    } catch(err) {
        console.log('no voting because :', err);
    }
}

module.exports = {getAttachments, createAttachment, voteForAttachment}