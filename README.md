# 🎓 Student Management System (React + Redux + JSON Server)

A Student Management System built using React, Redux, Redux Thunk, React Router, Bootstrap, and JSON Server.
This project allows users to manage student records with full CRUD operations including adding, updating, viewing, and deleting students.

The application also includes basic authentication, sorting, filtering, and a responsive UI.

# 🚀 Features
## 📋 Student Management

View all students in a list or card layout

Add new student records

Update existing student information

Delete students from the system

## 🔐 Authentication

Simple login system using localStorage

Protected routes using PrivateRoute

Logout automatically redirects to login page

## 🎛 Data Handling

Global state management using Redux

Async API calls using Redux Thunk

Backend simulation using JSON Server

## 📊 Extra Functionalities

Sorting students by Name or Roll Number

Filtering students by Class

Responsive Bootstrap UI

Dashboard-style Home Page

Student Cards display

## 🛠 Technologies Used

React JS

Redux

React Redux

Redux Thunk

React Router DOM

Axios

Bootstrap

JSON Server

# 📁 Project Structure

```
src
│
├── components
│   ├── Navbar.jsx
│   ├── StudentList.jsx
│   ├── StudentForm.jsx
│   ├── StudentDetails.jsx
│   └── PrivateRoute.jsx
│
├── pages
│   ├── Home.jsx
│   └── Login.jsx
│
├── redux
│   ├── actions.js
│   ├── reducer.js
│   ├── store.js
│   └── thunks.js
│
├── App.jsx
└── index.js
```

# ⚙️ Installation & Setup

## 1️⃣ Clone the Project
```
git clone https://github.com/your-username/student-management-system.git
```

## 2️⃣ Install Dependencies
```
npm install
```

## 3️⃣ Install Bootstrap
```
npm install bootstrap
```

## 4️⃣ Import Bootstrap in index.js
```
import 'bootstrap/dist/css/bootstrap.min.css';
```

## 5️⃣ Start React App
```
npm run dev
```

or (if using CRA)

```
npm start
```

# 🗄 JSON Server Setup

## Install JSON Server:

```
npm install -g json-server
```

## Create db.json

```
{
  "students": [
    {
      "id": 1,
      "name": "Rahul",
      "roll": "101",
      "class": "10"
    },
    {
      "id": 2,
      "name": "Priya",
      "roll": "102",
      "class": "9"
    }
  ]
}
```

## Run the server:

```
json-server --watch db.json --port 5000
```

## API endpoint:
```
http://localhost:5000/students
```

# 🔄 CRUD Operations

| Operation        | Method | Endpoint        |
|------------------|--------|-----------------|
| Get Students     | GET    | /students       |
| Add Student      | POST   | /students       |
| Update Student   | PUT    | /students/:id   |
| Delete Student   | DELETE | /students/:id   |

# 🔑 Authentication

Authentication is implemented using localStorage.

Login → stores "auth" in localStorage

Private routes check authentication status

Logout removes "auth" and redirects to login page

# 🎨 UI Components

Responsive Navbar

Dashboard-style Home Page

Student Card Layout

Add Student Form

Clean Bootstrap UI

# 📌 Learning Outcomes

This project demonstrates:

React component architecture

Redux state management

Async operations with Redux Thunk

API integration with Axios

Client-side authentication

Routing using React Router

CRUD operations with JSON Server

# ScreenShot

## LoginPage
![LoginPage](https://github.com/jinaljain0705/ReactJS-Student-ManagementProject/blob/main/src/assets/screenshot/LoginPage.png)

## Home
![Home](https://github.com/jinaljain0705/ReactJS-Student-ManagementProject/blob/main/src/assets/screenshot/HomePage.png)

## AddStudents
![AddStudents]()

## StudentsList
![StudentsList]()

# 👨‍💻 Author

Jinal Jain

Full Stack Developer Student

Red & White Multimedia Education

# ⭐ Project Purpose

This project was created as part of a React JS practical exam and learning exercise to demonstrate full-stack frontend concepts including Redux, API integration, authentication, and UI development using Bootstrap.
