const mongoose = require('mongoose');

const BarcodeSchema = new mongoose.Schema({
    partName: {
        type: String,
        required: true
    },
    partModel: {
        type: String,
        required: true
    },
    partCode: {
        type: Number,
        required: true
    },
    partProduction: {
        type: String,
        required: true
    },
});

/*const Barcode = module.exports = mongoose.model('Barcode', BarcodeSchema);*/

mongoose.model('Barcode', BarcodeSchema);