const mongoose = require('mongoose');
require('dotenv');

const connectionDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Database connected!');

    } catch (error) {

        console.log(error);
        throw new Error(`It occurred an error to try connect with the database`);
    
    }
}

module.exports = { connectionDB }