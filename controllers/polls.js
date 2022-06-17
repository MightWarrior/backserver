const { v4: uuidv4 } = require('uuid');
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

const createPoll = async (poll) => {
    console.log(poll);
    try {
        let { pages } = poll;
        let { attachments } = pages;
        let { file } = attachments;

        let pagesUUID = uuidv4();
        let pollsUUID = uuidv4();
        let attachmantsUUID = uuidv4();
        let fileUUID = uuidv4();

        const newPoll = await Poll.create({
            id: pollsUUID,
            title: poll.title,
            description: poll.description,
            active: true,
        });

        const newPage = await Page.create({
            id: pagesUUID,
            title: pages.title,
            poll_id: pollsUUID,
        });

        const newAttachment = await Attachment.create({
            id: attachmantsUUID,
            page_id: pagesUUID,
            title: attachments.title,
            description: attachments.description,
            votes: 0,
        });

        const newFile = await File.create({
            id:fileUUID,
            attachment_id: attachmantsUUID,
            name: file.name,
            link: file.link,
            type: file.type,
        })

        return { ...newPoll, pages: { ...newPage, attachments:{ ...newAttachment, file:{ ...newFile }}}};

    } catch(err) {
        console.log('Here error', err);
    }
};

const updatePoll = async (poll) => {
    console.log(poll);
    try {
        let { pages } = poll;
        let { attachments } = pages;
        let { file } = attachments;

        const newPoll = await Poll.update({
            title: poll.title,
            description: poll.description,
            active: poll.active ? poll.active: true,
        },{
            where: {
                id: poll.id,
            }
        });

        const newPage = await Page.update({
            title: pages.title,
        },{
            where: {
                id: pages.id,
            }
        });

        const newAttachment = await Attachment.update({
            title: attachments.title,
            description: attachments.description,
        }, {
            where: {
                id: attachments.id,
            }
        });

        const newFile = await File.update({
            name: file.name,
            link: file.link,
            type: file.type,
        }, {
            where: {
                id: file.id,
            }
        })

        return { newPoll, newPage, newAttachment, newFile };

    } catch (err) {
        console.log('here error', err);
    }
}

const setActive = async (id, isActive) => {
    console.log(id);
    try{
        const updatedPoll = await Poll.update({
             active: isActive
             }, {
             where: {
                 id: id
             }
         });
         return updatedPoll;
     } catch(err) {
         console.log('no voting because :', err);
     }
}

module.exports = {getPolls, getPollById, createPoll, setActive, updatePoll}