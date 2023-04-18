const Chat = require('../models/chat');

const validateExistMessageWithID = async (id) => {
    const messageDB = await Chat.findById(id);

    if(!messageDB) {
        throw new Error(`Doesn't exist the message with the id: ${id}`);
    };
};

const validateMessageIsNotDeleted = async (id) => {
    const messageDB = await Chat.findById(id);

    if(messageDB.isDeleted) {
        throw new Error(`Doesn't exist the message with the id: ${id}`);
    }
}

module.exports = {
    validateExistMessageWithID,
    validateMessageIsNotDeleted
};