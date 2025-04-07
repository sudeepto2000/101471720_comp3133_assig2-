# Employee Management System (Backend)

## 📌 Project Overview

This is a **GraphQL-based Employee Management System backend** built using **Node.js, Express, MongoDB, and GraphQL**. It provides a robust API for managing employees, including authentication, CRUD operations, and search functionalities.

---

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **GraphQL** - Query language for APIs
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT (jsonwebtoken)** - Authentication mechanism
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **Docker & Docker Compose** - Containerization
- **Git & GitHub** - Version control

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/employee-management.git
cd employee-management
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a **.env** file and configure:

```
MONGO_URI=mongodb://localhost:27017/employee_management
SECRET_KEY=your_jwt_secret
PORT=4000
```

### **4️⃣ Run the Server**

```sh
npm start
```

OR using **Nodemon** (for development):

```sh
npx nodemon server.js
```

### **5️⃣ Running with Docker**

#### **Build & Start Containers**

```sh
docker-compose up --build -d
```

#### **Stop Containers**

```sh
docker-compose down
```

---

## 🛡️ Input Validation

- **express-validator** is used to ensure data integrity.
- Example: Email and salary validation before creating an employee.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

- **Full Name: Sudeepto Hasan** (Jr. Software Engineer)
- GitHub: [your-github-profile](https://github.com/your-username)
