const mongoose = require('mongoose');

const connectDataBase = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Database connected!');
    } catch (error) {
        console.log(`An error occurred when try to connect with the database`);
    }
}

module.exports = { connectDataBase };