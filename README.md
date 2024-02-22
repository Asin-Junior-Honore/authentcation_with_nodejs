
Project Title: Authentication with Node.js

Description:
The Authentication with Node.js project is a repository containing code for implementing user authentication in a Node.js application. This project demonstrates how to set up user authentication features such as user registration, login, logout, and password reset using Node.js and various npm packages.

Features:

User Registration: Allows users to create an account by providing a username, email, and password.
User Login: Provides a login mechanism for registered users to access restricted parts of the application.
Session Management: Manages user sessions to keep users authenticated across multiple requests.
Password Hashing: Implements secure password storage by hashing passwords before saving them to the database.
Access Control: Restricts access to certain routes or resources based on user authentication status and roles.
Technologies Used:

Node.js: Used as the server-side runtime environment for building the application.
Express.js: Utilized as the web application framework for handling HTTP requests and routes.
Passport.js: Integrated for implementing authentication middleware and strategies.
bcrypt.js: Utilized for hashing user passwords securely.
Express Session: Used for managing user sessions and session data.
Nodemailer: Integrated for sending password reset emails to users.
Project Structure:

app.js: Main application file containing server setup and route configurations.
config: Directory containing configuration files for database connection, session management, and authentication strategies.
models: Directory containing Mongoose models for defining user schema and data validation.
routes: Directory containing route handlers for user authentication, registration, login, logout, and password reset.
views: Directory containing views (HTML templates) for user authentication-related pages.
public: Directory containing static assets such as stylesheets, client-side JavaScript files, and images.
middleware: Directory containing custom middleware functions for authentication and authorization.
Usage:

Clone the repository to your local machine.
Install dependencies using npm install.
Configure environment variables for and session secret.
Run the application using npm devStart.
Access the application in your web browser at http://localhost:2000

**NOTE** : A databse was not used in this project rather a variable which i set to empty arrayb was used for storing users data and info 
