# Task Management System
### Technologies and Tools
- React JS
- bootstrap
- Spring Boot
- MySQL

### Prerequisites
- Java Development Kit (JDK) 11 or later
- Node.js and npm (Node Package Manager)
- MySQL Server

### Installation and Setup
## Backend
1. Clone the repository
   `git clone https://github.com/harsani95/Task-Management-System.git`
2. Navigate to the backend directory.(taskMange)
3. Configure MySQL database settings in application.properties file located in src/main/resources.
   ` spring.datasource.url=jdbc:mysql://localhost:3306/db_name
   spring.datasource.username=db_username
   spring.datasource.password=db_password `
5. Run the Spring Boot application.
6. The backend server will start at `http://localhost:8080`

## Frontend
1. Navigate to the frontend directory (client)
2. Install dependencies.`npm install`
3. Start the Vite development server.`npm run dev`
4. The React app will start at `http://localhost:5173`
