const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AsmSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    course: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    },
    due_time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Asm', AsmSchema);