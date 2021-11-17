const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please provide todo title'],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [50, 'Description cannot be more than 50 characters'],
    },
    deadline: {
        type: Date,
        default: new Date().toDateString(),
        required: [true, 'Please provide todo deadline'],
    },
    completed: {
        type: Boolean,
        default: false,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);