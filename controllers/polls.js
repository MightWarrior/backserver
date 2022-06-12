const Attachment = require('lib/models/attachment');
const File = require('lib/models/file');
const Page = require('lib/models/page');
const Poll = require('lib/models/poll')

const getPolls = async () => {
    try{
    const files = await Poll.findAll({
        include: [{
            model: Page, 
            as: 'pages',
            include: [{
                model: Attachment, 
                as: 'attachments',
                include: {
                    model: File, 
                    as: 'files'
                }    
            }]
        }]
    });
    console.log(JSON.stringify(files));
    return files;
} catch (err) {
    console.log('Here error', err);
}
};

const getPollById = async (id) => {
    try {
        const poll = await Poll.findOne({
            where :{
                id: id,
            },
            include: [{
                model: Page, 
                as: 'pages',
                include: [{
                    model: Attachment, 
                    as: 'attachments',
                    include: {
                        model: File, 
                        as: 'files'
                    }    
                }]
            }]
        });
        return poll;
    } catch (err) {
         console.log('Here error', err);
         }
}

const createPoll = (poll) => {
    console.log(poll);

    
};

module.exports = {getPolls, getPollById, createPoll}