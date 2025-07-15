# Task Management System

## 📝 Project Overview

This is a simple **Task Management System** built with **React (frontend)** and **Spring Boot (backend)**.  
Key features include:

- 🗂️ Create, update, delete tasks.
- 👥 Assign tasks to team members.
- 📅 Set start & end dates.
- 🔒 Secure user login with JWT token.
  
### Technologies and Tools
- React JS
- bootstrap
- Spring Boot
- MySQL

### Prerequisites
- Java Development Kit (JDK) 11 or later
- Node.js 18 or later and npm (Node Package Manager)
- MySQL Server
- Maven

### Installation and Setup
### ✅ 1️⃣ Clone the repository
 Clone the repository
  - `git clone https://github.com/harsani95/Task-Management-System.git`
  - `cd Task-Management-System`

### ✅ 2️⃣ Backend Setup — Spring Boot
 1. Navigate to the backend directory.(taskMange)

 2. Configure MySQL database settings in application.properties file located in src/main/resources.
   - `spring.datasource.url=jdbc:mysql://localhost:3306/db_name`
   - `spring.datasource.username=db_username`
   - `spring.datasource.password=db_password `
 3. Run the Spring Boot application.
 4. The backend server will start at `http://localhost:8080`

### ✅ 3️⃣ Frontend Setup — React
1. Navigate to the frontend directory (client)
2. Install dependencies.`npm install`
3. Start the Vite development server.`npm run dev`
4. The React app will start at `http://localhost:5173`
