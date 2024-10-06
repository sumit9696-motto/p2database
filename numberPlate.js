// numberPlate.js
const mongoose = require('mongoose');

const numberPlateSchema = new mongoose.Schema({
    plate: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const NumberPlate = mongoose.model('NumberPlate', numberPlateSchema);

module.exports = NumberPlate;
