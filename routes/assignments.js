let express = require('express');
let router = express.Router();

// Import the assignment model
let Assignment = require('../models/assignment');

// Read operation - retrieve all assignments
router.get('/', async (req, res, next) => {
    try {
        const assignmentList = await Assignment.find();

        res.render('assignments', {
            title: 'Assignments',
            assignmentList: assignmentList
        });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

// Create operation - display the form
router.get('/add', async (req, res, next) => {
    try {
        res.render('add', {
            title: 'Add Assignment'
        });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

// Create operation - save a new assignment
router.post('/add', async (req, res, next) => {
    try {
        let newAssignment = {
            name: req.body.name,
            course: req.body.course,
            description: req.body.description,
            dueDate: req.body.dueDate,
            priority: req.body.priority,
            status: req.body.status
        };

        await Assignment.create(newAssignment);

        res.redirect('/assignments');
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

// Update operation - display the edit assignment form
router.get('/edit/:id', async (req, res, next) => {
    try {
        let id = req.params.id;

        // Retrieve the selected assignment
        let assignmentToEdit = await Assignment.findById(id);

        if (!assignmentToEdit) {
            return res.status(404).send('Assignment not found');
        }

        res.render('edit', {
            title: 'Edit Assignment',
            assignment: assignmentToEdit
        });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

// Update operation - save changes to an assignment
router.post('/edit/:id', async (req, res, next) => {
    try {
        let id = req.params.id;

        let updatedAssignment = {
            name: req.body.name,
            course: req.body.course,
            description: req.body.description,
            dueDate: req.body.dueDate,
            priority: req.body.priority,
            status: req.body.status
        };

        // Update the selected assignment in MongoDB
        let result = await Assignment.findByIdAndUpdate(
            id, updatedAssignment
        );

        if (!result) {
            return res.status(404).send('Assignment not found');
        }

        // Return to the assignments page
        res.redirect('/assignments');
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

// Delete operation - remove an assignment
router.post('/delete/:id', async (req, res, next) => {
    try {
        let id = req.params.id;

        // Delete the selected assignment from MongoDB
        await Assignment.deleteOne({ _id: id });

        // Return to the assignments page
        res.redirect('/assignments');
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;