# 🛡️ SafeReach – Emergency Reporting & Response Platform

SafeReach is an emergency reporting and response platform designed to provide users with a simple and accessible way to report emergencies and access important emergency-response information.

The system provides a user-friendly frontend and a backend API responsible for authentication, data management, emergency reports, and secure communication between the application and database.

---

## 👨‍💻 Developer

**Eneanya Ferdinand Ogochukuw**

**Student ID:** VEPH/20C/BE053

---

## 📌 Project Overview

SafeReach was developed as an emergency-response solution that allows users to interact with a centralized platform for reporting emergency situations.

The backend provides the infrastructure required to:

* Register and authenticate users
* Secure user accounts
* Store user information
* Authenticate requests using JWT
* Protect private API routes
* Process emergency reports
* Store application data in MongoDB
* Communicate with the SafeReach frontend
* Provide structured REST API responses

---

## 🚀 Key Features

### 🔐 User Authentication

SafeReach includes a secure authentication system that supports:

* User registration
* User login
* Password hashing
* JWT authentication
* Protected routes
* Authentication middleware

### 🚨 Emergency Reporting

Users can report emergency situations through the SafeReach platform.

Emergency categories can include:

* 🔥 Fire
* 🚑 Medical emergencies
* 👮 Security emergencies
* ⚠️ Other emergency situations

Reports can contain relevant information such as the emergency category, description, location, status, and reporting user.

### 👤 User Management

The backend stores important user information, including:

* Full name
* Residential location
* Email
* Phone number
* Securely hashed password
* Account creation information

### 🔒 Protected API Routes

Private resources are protected using JSON Web Tokens.

Authenticated requests use:

```http
Authorization: Bearer <JWT_TOKEN>
```

The authentication middleware verifies the token before allowing access to protected resources.

---

# 🏗️ System Architecture

```text
                    ┌───────────────────┐
                    │       User        │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │ SafeReach Frontend│
                    │   HTML/CSS/JS     │
                    └─────────┬─────────┘
                              │
                         HTTP Requests
                              │
                              ▼
                    ┌───────────────────┐
                    │   Express API     │
                    │     Node.js       │
                    └─────────┬─────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
             Authentication       Application
               Middleware           Routes
                    │                   │
                    └─────────┬─────────┘
                              │
                              ▼
                         ┌─────────┐
                         │ Mongoose│
                         └────┬────┘
                              │
                              ▼
                         ┌─────────┐
                         │ MongoDB │
                         └─────────┘
```

---

# 🛠️ Technologies Used

## Backend

* **Node.js** – JavaScript runtime
* **Express.js** – REST API framework
* **MongoDB** – Database
* **Mongoose** – MongoDB ODM
* **JWT** – Authentication
* **bcrypt** – Password hashing
* **dotenv** – Environment configuration

## Frontend

* HTML5
* CSS3
* JavaScript
* Font Awesome

## Development Tools

* Visual Studio Code
* Postman
* Git
* GitHub
* MongoDB Atlas

---

# 📂 Project Structure

```text
SafeReach/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── about.html
│   ├── contact.html
│   ├── how-it-works.html
│   ├── features.html
│   │
│   ├── pages/
│   │   ├── report-category.html
│   │   ├── report-location.html
│   │   └── report-success.html
│   │
│   ├── css/
│   │   ├── dashboard.css
│   │   ├── report.css
│   │   ├── alerts.css
│   │   └── contact.css
│   │
│   ├── js/
│   │   ├── dashboard.js
│   │   ├── report.js
│   │   └── contact.js
│   │
│   └── images/
│
│
└── backend/
    │
    ├── src/
    │   ├── config/
    │   │   └── db.js
    │   │
    │   ├── controllers/
    │   │   ├── authController.js
    │   │   └── reportController.js
    │   │
    │   ├── middleware/
    │   │   └── authMiddleware.js
    │   │
    │   ├── models/
    │   │   ├── User.js
    │   │   └── Report.js
    │   │
    │   ├── routes/
    │   │   ├── authRoutes.js
    │   │   └── reportRoutes.js
    │   │
    │   └── app.js
    │
    ├── .env
    ├── .gitignore
    ├── package.json
    └── server.js
```

---

# 🔑 API Endpoints

## Authentication

### Register User

```http
POST /auth/register
```

Example request:

```json
{
  "fullName": "Test User",
  "location": "Yenagoa",
  "email": "test@example.com",
  "phone": "08000000000",
  "password": "Password123"
}
```

### Login User

```http
POST /auth/login
```

Example:

```json
{
  "email": "test@example.com",
  "password": "Password123"
}
```

A successful login returns an authentication token.

---

# 🔐 Authentication

SafeReach uses **JSON Web Tokens (JWT)** to protect private resources.

After login, the client receives a token.

The token should be included in protected requests:

```http
Authorization: Bearer YOUR_TOKEN
```

The backend authentication middleware verifies the token before allowing access.

---

# 🗄️ Database

SafeReach uses **MongoDB** for persistent data storage.

The application uses Mongoose to interact with MongoDB.

### User Collection

Example user information:

```text
User
├── fullName
├── location
├── email
├── phone
├── password
└── createdAt
```

Passwords are hashed before being stored.

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone <your-repository-url>
```

Move into the project:

```bash
cd SafeReach
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**Do not upload your `.env` file to GitHub.**

---

## 4. Start the Backend

For normal development:

```bash
node server.js
```

If Nodemon is configured:

```bash
npm run dev
```

The server should start on:

```text
http://localhost:5000
```

---

# 🧪 API Testing

Postman can be used to test the SafeReach API.

Recommended testing sequence:

### 1. Register

```text
POST /auth/register
```

### 2. Login

```text
POST /auth/login
```

### 3. Copy JWT Token

Copy the token returned by the login request.

### 4. Test Protected Route

Add:

```http
Authorization: Bearer <your-token>
```

to the request headers.

---

# 🔒 Security

SafeReach implements several security practices:

* Password hashing with bcrypt
* JWT-based authentication
* Protected API routes
* Environment variables for sensitive configuration
* Input validation
* HTTP status codes for API responses
* Separation of authentication middleware and application routes

Sensitive files such as `.env` and `node_modules` should not be committed to GitHub.

---

# 🧑‍💻 Development Challenges

During development, several backend challenges were encountered and resolved, including:

* MongoDB connection configuration
* Express route configuration
* Authentication middleware
* JWT implementation
* Mongoose model compilation
* Node.js dependency configuration
* Frontend-to-backend API communication
* API testing with Postman

These challenges provided practical experience in backend debugging, API development, database management, and authentication.

---

# 🔮 Future Improvements

Future versions of SafeReach can include:

* 📍 GPS-based emergency location tracking
* 🔔 Real-time emergency notifications
* 👮 Emergency responder dashboard
* 👨‍💼 Administrator dashboard
* 🔐 Role-based access control
* 💬 Real-time communication
* 📊 Emergency statistics and analytics
* 📝 Detailed audit logs
* 🧪 Automated API testing
* 📚 Swagger/OpenAPI documentation
* 🚦 API rate limiting

---

# 📸 Screenshots

Screenshots of the SafeReach interface can be added here.

Example:

```text
screenshots/
├── landing-page.png
├── login.png
├── signup.png
├── dashboard.png
├── report.png
└── alerts.png
```

---

# 📚 Learning Outcomes

The development of SafeReach provided practical experience in:

* REST API development
* Node.js backend development
* Express.js routing
* MongoDB database management
* Mongoose schemas and models
* JWT authentication
* Password hashing
* API security
* Middleware development
* API testing with Postman
* Git and GitHub
* Frontend-backend integration
* Debugging and error handling

---

# 👨‍💻 Author

**Eneanya Ferdinand Ogochukuw**

**Student ID:** VEPH/20C/BE053

**Project:** SafeReach Emergency Reporting & Response Platform

---

## 📄 License

This project was developed as an academic/project submission and for educational purposes.

---

## ⭐ SafeReach

**Report. Respond. Stay Safe.**
