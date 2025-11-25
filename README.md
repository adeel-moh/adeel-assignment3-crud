Assignment 3 – CRUD Web Application

Course: INFR 2600 – Web Scripting
Student: Adeel Mohammad
Student ID: 100988484

Overview

A CRUD (Create, Read, Update, Delete) web app built using Node.js, Express, MongoDB, and EJS.
The app lets users manage assignments — add, view, edit, and delete — with data stored in MongoDB Atlas and deployed on Render.

Live App: https://adeel-assignment3-crud-1.onrender.com 
GitHub Repo: https://github.com/adeel-moh/adeel-assignment3-crud

Features
- Add, view, edit, and delete assignments
- Persistent data storage with MongoDB Atlas
- Responsive EJS user interface
- Hosted on Render with secure environment variables

Tech Stack

- Backend: Node.js + Express
- Frontend: EJS Templates + CSS
- Database: MongoDB Atlas
- Deployment: Render

 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adeel-moh/adeel-assignment3-crud.git
   cd adeel-assignment3-crud
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Run the app:

   ```bash
   npm start
   ```

   Then visit http://localhost:3000

Folder Structure

```
├── app.js
├── config/db.js
├── controllers/assignmentcontroller.js
├── models/assignment.js
├── routes/index.js
├── views/
│   ├── add.ejs
│   ├── edit.ejs
│   ├── delete.ejs
│   ├── assignments.ejs
│   ├── home.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/stylesheets/style.css
├── .gitignore
└── README.md
```

 Deployment Notes

- Start command: `node app.js`
- Environment Variables: Configured in Render dashboard
- Database: MongoDB Atlas

References

* [Node.js Documentation]https://nodejs.org/
* [Express.js Guide]https://expressjs.com/
* [MongoDB Atlas]https://www.mongodb.com/atlas
* [Render Docs]https://render.com/docs
