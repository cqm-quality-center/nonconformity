const mongoose = require('mongoose');

const NonconformitySchema = mongoose.Schema({
    mark: {
        type: String,
        required: true
    },
    part: {
        type: String,
        required: true
    },
    um: {
        type: String
    },
    amount: {
        type: Number
    },
    remark: {
        type: String
    },
    imagePath: {
        type: String
    },

});

const Nonconformity = module.exports = mongoose.model('Nonconformity', NonconformitySchema);