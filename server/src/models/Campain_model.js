const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampainSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image_path: {
        type: String,
        required: true
    },
    platfrom: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Campain', CampainSchema);