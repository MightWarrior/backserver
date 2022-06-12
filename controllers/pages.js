const Attachment = require('lib/models/attachment');
const File = require('lib/models/file');
const Pages = require('../lib/models/page');

const getPages = async () => {
    try{
    const files = await Pages.findAll({
        include: [{
            model: Attachment, 
            as: 'attachments',
            include: {
                model: File, 
                as: 'files'
            }    
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

module.exports = {getPages, createAttachment}