// Import Mongoose
let mongoose = require('mongoose');

// Define the structure of an assignment document
let assignmentModel = mongoose.Schema({
    name: String,
    course: String,
    description: String,
    dueDate: Date,
    priority: String,
    status: String
},
{
    collection: "assignments"
});



// Export the assignment model for use in other files
module.exports = mongoose.model('Assignment', assignmentModel);