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

# 🚀 TaskHub Frontend

TaskHub Frontend is a modern **React + Vite + Tailwind CSS** application for managing tasks effortlessly.  
It provides an intuitive user interface with a sleek dark-blue theme, responsive layout, and smooth user experience.  

---

## 📸 Preview

### 🌙 Dark Blue UI  
![TaskHub Preview](./public/preview.png)

*(Replace `./public/preview.png` with the actual path or URL to your screenshot after deployment)*

---

## ✨ Features

- ⚡ Built with [Vite](https://vitejs.dev/) for blazing-fast development
- 🎨 Styled using [Tailwind CSS](https://tailwindcss.com/)
- 📱 Fully responsive design (mobile-first)
- 🌙 Dark blue gradient theme for a professional look
- 🧭 Navigation bar with **Home, Tasks, About**
- 💡 Hero section with call-to-action buttons
- 🔗 Ready for deployment on **Netlify**
- 🛠️ Easily extendable to connect with backend APIs

---

## 📂 Project Structure

frontend/
├── public/ # Static assets (place preview screenshot here)
├── src/
│ ├── App.jsx # Main App component
│ ├── main.jsx # Entry point
│ ├── index.css # Tailwind CSS styles
│ └── components/ # (Future UI components)
├── package.json
├── tailwind.config.js
├── postcss.config.cjs
└── README.md


---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Leemo-ui/taskhub-frontend.git
cd taskhub-frontend

Install dependencies

Using pnpm (recommended):
pnpm install

Run in development mode
pnpm run dev

This starts the app at http://localhost:5173
.