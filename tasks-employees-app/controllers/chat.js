const Chat = require('../models/chat');

const createMessage = async (req, res) => {
    try {
        const data = req.body;
        data.idFrom = req.user.id;

        const message = new Chat(data);
        await message.save();

        res.status(200).json(message);

    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }
};

const createMessageToOneUser = async (req, res) => {
    try {

        const { id } = req.params;

        const data = {
            ...req.body,
            idTo: id,
            idFrom: req.user.id
        };

        const message = new Chat(data);
        await message.save();

        res.status(200).json(message);

    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }

};

const updateMessage = async (req, res) => {
    try {

        const { id } = req.params;
        const { idFrom, idTo, ...data  } = req.body;
        
        const message = await Chat.findByIdAndUpdate(id, data, { new: true });
        await message.save();

        res.status(200).json(message);

    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }
};

const deleteMessage = async (req, res) => {

    try {

        const { id } = req.params;
        const message = await Chat.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        await message.save();

        res.status(200).json(message);
        
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error - It occurred an error to try delete the message ');
    }

};

const getMessages = async (req, res) => {
    try {
        const { limit = 10, start = 0 } = req.params;
        const query = { isDeleted: false, idTo: null  };

        const requests = await Promise.all([
            Chat.find(query).skip(start).limit(limit).populate('idFrom', 'name'),
            Chat.countDocuments(query)
        ]);

        const [ messages, total ] = requests;
        res.json({ total, messages });
    } catch (error) {
        console.log(error);
        res.status(500).json('It occurred an error to try get the messages');
    }
};

const getMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await Chat.findById(id);

        res.json(message);
    } catch (error) {
        console.log(error);
        res.status(500).json('It occurred an error to try get the message');
    }
};

module.exports = { 
    createMessage,
    createMessageToOneUser,
    updateMessage,
    deleteMessage,
    getMessages,
    getMessage
};