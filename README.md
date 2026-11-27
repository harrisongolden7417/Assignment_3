## Project Description

Assignment Tracker is a web application designed to help students organize their assignments and manage their academic workload. Users can keep track of assignment names, courses, descriptions, due dates, priorities and completion statuses.

The application was developed using Node.js, ExpressJS, EJS, MongoDB and Mongoose.

## Features

- Create new assignments.
- View all assignments stored in MongoDB Atlas.
- Edit existing assignment information.
- Delete assignments with a confirmation message.
- Track assignment priorities and completion statuses.
- Shared header, navigation bar and footer across all pages.
- Dynamic navigation that highlights the current page.
- Responsive design for desktop, tablet and mobile devices.
- Database credential protection using .env and .gitignore.

## CRUD Functionality

The application supports all four CRUD operations.

**Create:** Users can add new assignments by completing and submitting a form.

**Read:** Assignments stored in MongoDB Atlas are retrieved and displayed in a table.

**Update:** Users can edit existing assignments and save their changes to the database.

**Delete:** Users can remove assignments from the database after confirming their decision.

## Responsive Design and Styling

Bootstrap was used to organize the layout of the application, including the navigation bar, tables, forms, cards and buttons. Font Awesome was used to provide icons throughout the website.

A custom CSS stylesheet was created with assistance from ChatGPT to give the application its own appearance and differentiate it from the in-class bookstore example. The website uses a navy and blue colour scheme, priority and status indicators, and responsive layouts to improve the overall user experience.

## Database and Security

MongoDB Atlas is used to store and manage assignment information. Mongoose is used to connect the application to the database, define the assignment model and perform CRUD operations.

Database credentials are stored in a private .env file and accessed through a separate database configuration file. The .gitignore file prevents sensitive credentials and installed dependencies from being uploaded to GitHub.

Server-side validation is also used to ensure that required assignment information is provided and that priority and status values are valid.

The application is intended as a public CRUD demonstration and does not include user authentication.

## Technologies Used

- Node.js
- ExpressJS
- EJS
- MongoDB Atlas
- Mongoose
- Bootstrap
- Font Awesome
- HTML, CSS and JavaScript
- dotenv
- Git and GitHub
- Render

## Course References

The application was developed using the professor's lecture slides, recorded lectures and in-class CRUD example as its primary references.

- **October 26 Lecture:** JavaScript fundamentals, functions and callbacks.
- **November 3 Lecture:** Node.js, npm, ExpressJS and application structure.
- **November 9 Lecture:** EJS templates, shared partials, dynamic navigation, MongoDB connections, Mongoose models and the Read operation.
- **November 16 Lecture:** Create, Update and Delete operations, Bootstrap forms, document IDs and routing.
- **November 23 Lecture:** Review and demonstration of completed CRUD functionality.
- **CRUD Part-1(2).zip:** ExpressJS application structure, database configuration, Mongoose models, Read operation, EJS partials, Bootstrap and Font Awesome.
- **MongoDB Lecture Slides:** Database concepts, schemas, models and Mongoose.
- **Assignment 3 Instructions:** Application functionality, design and security requirements.

The in-class bookstore example was used as a reference and adapted to fit the purpose of an assignment tracking application.

## External References

- Node.js – https://nodejs.org/dist/latest-v16.x/docs/api/synopsis.html#example
- npm – https://www.npmjs.com/
- ExpressJS – https://expressjs.com/
- Bootstrap – https://getbootstrap.com/
- Font Awesome – https://fontawesome.com/
- MongoDB – https://www.mongodb.com/
- Mongoose Validation – https://mongoosejs.com/docs/validation.html

## Additional Code Attributions

ChatGPT was used to assist with development guidance, troubleshooting, documentation and supplemental code implementations.

These implementations included:

- Server-side validation in models/assignment.js.
- Update validation, POST-based deletion and error handling in routes/assignments.js.
- Date formatting and dropdown selection in edit.ejs.
- Additional navigation conditions in main_nav.ejs.
- Custom CSS styling and responsive adjustments in style.css.

ChatGPT reference: https://chatgpt.com/

## Project Links

**GitHub Repository:** https://github.com/harrisongolden7417/Assignment_3.git

**Live Website:** [Insert Render URL]
