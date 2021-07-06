const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const Brand = mongoose.model('brand', brandSchema);

module.exports = Brand