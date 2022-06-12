const {File} = require('lib/models/file');

const getFiles = async () => {
    try{
    const files = await File.findAll();
    console.log(JSON.stringify(files));
    return files;
} catch (err) {
    console.log('Here error', err);
}
};

const createFile = ({}) => {

};

module.exports = {getFiles, createFile}