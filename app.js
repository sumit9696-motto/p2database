// app.js
const mongoose = require('mongoose');
const NumberPlate = require('./numberPlate');

require('dotenv').config();

const uri = process.env.MONGODB_URI;


async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}










async function saveNumberPlate(plate) {
    const numberPlate = new NumberPlate({ plate });
    try {
        await numberPlate.save();
        console.log('Number plate saved:', numberPlate);
    } catch (err) {
        console.error('Error saving number plate:', err);
    }
}

(async () => {
    await connectDB();
    // Example usage: Save a number plate
    await saveNumberPlate('ABC1234');
    mongoose.connection.close();
})();
