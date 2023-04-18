const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
    
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Database connected successfully!');
    
    } catch(error) {
        console.log(error);
    }
}

module.exports = { connectDatabase };