const Chat = require('../models/chat');

const validateIsOwnerTheMessage = async (req, res, next) => {
    const { id } = req.params;
    const user = req.user;
    const messageDB = await Chat.findById(id);

    if(JSON.stringify(user.id) !== JSON.stringify(messageDB.idFrom)) {
        return res.status(401).json({
            msg: 'You are not allowed to do this'
        });
    }

    next();

};

module.exports = {
    validateIsOwnerTheMessage
};