# Notes App

A simple, full-stack note-taking application built with **React**, **Express**, **MongoDB**, and **Node.js**. The app is deployed on **Vercel** (frontend) and **Render** (backend). Users can register, log in, and manage their notes securely using JWT authentication. For the sake of this demo, you can use a fake email and password to test it.

**Live Demo:** [https://notes-app-frontend-fimhwk2vu-joao-dias-projects-c47a3e98.vercel.app/](https://notes-app-frontend-fimhwk2vu-joao-dias-projects-c47a3e98.vercel.app/)

## Features

* **User Authentication**  
  - Register new users and login securely using **JWT tokens**.  
  - Passwords are hashed with **bcrypt**.  
  - Prevents duplicate email registration.  

* **Notes Management (CRUD)**  
  - **Create** new notes with title and content.  
  - **Read** all notes associated with the logged-in user.  
  - **Update** notes (only by the owner).  
  - **Delete** notes safely with ownership validation.  

* **Protected Routes**  
  - Notes routes are protected using middleware validating JWT tokens.  
  - Users can only access and modify their own notes.  

* **Frontend Integration**  
  - Built with **React** and **Vite**.  
  - Communicates with backend API using **Axios**.  
  - Automatically attaches JWT token to API requests.  

* **Responsive UI**  
  - Clean and interactive design using **TailwindCSS**.   

* **Persistent Storage**  
  - Data is stored in **MongoDB** using **Mongoose**.  
  - Supports efficient querying of user-specific notes.  

* **CORS and Deployment Ready**  
  - Configured to work with deployed frontend on **Vercel** and backend on **Render**.  

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Axios, React Router  
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt  
- **Deployment:** Frontend on Vercel, Backend on Render

## Usage

1. Open the **live demo**: [Notes App](https://notes-app-frontend-fimhwk2vu-joao-dias-projects-c47a3e98.vercel.app/)
2. Register a new account.
3. Login with your credentials.
4. Start creating, editing, and deleting notes.
5. Notes are saved to your account and protected with JWT authentication.

## Challenges & Learnings

During this project, I faced several challenges and gained important lessons:

- **CORS Configuration:** Learned to properly configure CORS for cross-origin requests between frontend on Vercel and backend on Render, including handling preflight OPTIONS requests.  
- **JWT Authentication:** Implemented secure authentication with JWT tokens, hashed passwords with bcrypt, and route protection middleware.
- **Full-Stack Integration:** Strengthened skills in connecting a React frontend with an Express/MongoDB backend while maintaining secure and persistent user data.

## Project Highlights

- ✅ Full-stack app with authentication
- ✅ Deployed on cloud platforms (Vercel & Render)
- ✅ Handles CORS and preflight requests properly
- ✅ Designed for real-world usage

## Backend Repository

For full-stack reference, the backend code is available here: [Notes App Backend](https://github.com/joaodias23/notes-app-backend)

## License

This project is licensed under the MIT License © 2025 João Dias.