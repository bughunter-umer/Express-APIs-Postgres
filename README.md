# Express APIs with PostgreSQL & Sequelize

This project is a basic RESTful API built using **Node.js**, **Express**, **PostgreSQL**, and **Sequelize** ORM. It allows you to perform CRUD operations on a `User` model.

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Sequelize ORM**
- **PgAdmin** (for visual database interface)
- **Postman** (for API testing)

---

## 📁 Project Structure

├── config/
│ └── db.js # Database connection using Sequelize
├── models/
│ └── User.js # Sequelize User model
├── routes/
│ └── userRoutes.js # API routes
├── index.js # Main server file
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/bughunter-umer/Express-APIs-Postgres.git
cd Express-APIs-Postgres
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup PostgreSQL
Install PostgreSQL and PgAdmin.

Create a database (e.g. express_api_db).

Update your DB config in config/db.js.

js
Copy
Edit
const sequelize = new Sequelize('express_api_db', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'postgres'
});
4. Sync Sequelize Models
bash
Copy
Edit
node index.js
This will create your tables automatically.

📮 API Endpoints
Method	Route	Description
POST	/api/users	Create new user
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
PUT	/api/users/:id	Update user
DELETE	/api/users/:id	Delete user

💡 Example User JSON
json
Copy
Edit
{
  "name": "Umer Awan",
  "email": "umer@example.com",
  "address": "Rawalpindi",
  "phone": "0314-5724596"
}
🧪 Testing
Use Postman or browser extensions like Thunder Client to send requests.

✅ Author
Umer Awan
LinkedIn
