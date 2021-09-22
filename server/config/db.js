require('dotenv').config({ path: 'ENV_FILENAME' });
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const connectDB = async() => {
    try{
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connection SUCCESS');
    } catch(error){
        console.error('MonggoDB connection FAIL');
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;