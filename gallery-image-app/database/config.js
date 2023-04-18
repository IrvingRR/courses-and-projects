const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Database connected!');

    } catch (error) {

        console.log(error);
        throw new Error('It occurred an error while to try to connect with the database');

    }
};

module.exports = {
    connectDB
};