require('dotenv').config();
const mongoose = require('mongoose');

const connectDatabase = async () => {

    try {
        
        await mongoose.connect(process.env.MONGO_CNN);

    } catch (error) {
        console.log(error);
        throw new Error('An error occurred while trying to connect with the database');
    }

    console.log('Database connected succesfully!');


}

module.exports = { connectDatabase };