# TaskHub# 🚀 TaskHub Backend

TaskHub Backend is a Node.js + Express API that powers the **TaskHub application**.  
It provides authentication, task management, leaderboard functionality, and connects to MongoDB.

🌍 **Live API:** [https://taskhub-4zg7.onrender.com](https://taskhub-4zg7.onrender.com)

---

## 📂 Project Structure

backend/
├── controllers/ # Route controllers
├── models/ # MongoDB models
├── routes/ # API routes
├── server.js # App entry point
├── .env # Environment variables (not committed)
└── package.json # Dependencies and scripts



---

## ⚙️ Technologies Used

- Node.js (runtime)
- Express.js (API framework)
- MongoDB + Mongoose (database)
- Nodemon (development auto-restart)
- dotenv (environment variables)
- Render (deployment)

---

## 🔧 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/taskhub.git
cd taskhub/backend


2. Install dependencies
pnpm install

3. Configure environment variables

Create a .env file in the backend folder with:
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_here

4. Run in development
pnpm dev

5. Run in production
pnpm start

📡 API Endpoints
Base URL
https://taskhub-4zg7.onrender.com

Deployment

This backend is deployed on Render.

Build command: pnpm install

Start command: pnpm start

Environment variables are configured in the Render dashboard (MONGO_URI, PORT, JWT_SECRET).

👨‍💻 Author

johnlimo

GitHub: @Leemo-ui

