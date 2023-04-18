const { v4: uuidv4 } = require('uuid');
const path = require('path');

const uploadFile = (files, validExtensions = ['png', 'jpg', 'jpeg', 'gif']) => {
    
    return new Promise((resolve, reject) => {

        const { file } = files;
        const cutName = file.name.split('.');
        const extension = cutName[cutName.length - 1];

        if(!validExtensions.includes(extension)) {
            return reject(`The extension ${extension} is invalid`);
        }

        const tempName = uuidv4() + '.' + extension;
        const pathUpload = path.join(__dirname, '../uploads', tempName);

        file.mv(pathUpload, (error) => {
            if(error) {
                reject(error);
            }

            resolve(tempName);
        });
    });

    
};

module.exports = {
    uploadFile
};