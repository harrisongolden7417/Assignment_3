// Import Mongoose
let mongoose = require('mongoose');

// Define the assignment schema and validation rules
let assignmentModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High']
    },
    status: {
        type: String,
        required: true,
        enum: ['Not Started', 'In Progress', 'Completed']
    }
},
{
    collection: "assignments"
});

// Export the assignment model
module.exports = mongoose.model('Assignment', assignmentModel);