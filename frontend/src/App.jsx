import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, username: 'demo', password: 'demo', name: 'Demo User' }
  ]);

  // Sample tasks data
  useEffect(() => {
    const sampleTasks = [
      { id: 1, title: 'Design Homepage', description: 'Create a responsive homepage design', createdBy: 1, claimedBy: null },
      { id: 2, title: 'Fix Login Bug', description: 'Users unable to login on mobile devices', createdBy: 1, claimedBy: null },
      { id: 3, title: 'Write Documentation', description: 'Document the new API endpoints', createdBy: 1, claimedBy: null },
    ];
    setTasks(sampleTasks);
  }, []);

  // Handle user login
  const handleLogin = (username, password) => {
    const foundUser = users.find(u => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      setCurrentPage('dashboard');
      return true;
    }
    return false;
  };

  // Handle user registration
  const handleRegister = (username, password, name) => {
    const newUser = {
      id: users.length + 1,
      username,
      password,
      name
    };
    setUsers([...users, newUser]);
    setUser(newUser);
    setCurrentPage('dashboard');
    return true;
  };

  // Handle user logout
  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  // Create a new task
  const handleCreateTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      createdBy: user.id,
      claimedBy: null
    };
    setTasks([...tasks, newTask]);
  };

  // Claim a task
  const handleClaimTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, claimedBy: user.id} : task
    ));
  };

  // Render the appropriate page based on state
  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <RegisterPage onRegister={handleRegister} onLogin={() => setCurrentPage('login')} />;
      case 'dashboard':
        return <DashboardPage tasks={tasks} onClaimTask={handleClaimTask} user={user} />;
      case 'create':
        return <CreateTaskPage onCreateTask={handleCreateTask} user={user} />;
      case 'profile':
        return <ProfilePage user={user} />;
      default:
        return <DashboardPage tasks={tasks} onClaimTask={handleClaimTask} user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col text-white">
      {/* Navigation */}
      {user && (
        <header className="sticky top-0 z-50 w-full py-4 px-8 flex justify-between items-center bg-blue-950/80 backdrop-blur-md shadow-lg">
          <h1 className="text-2xl font-bold tracking-wide flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            TaskHub
          </h1>
          <nav className="flex space-x-6 text-gray-200">
            <button onClick={() => setCurrentPage('dashboard')} className="hover:text-blue-300 transition">Dashboard</button>
            <button onClick={() => setCurrentPage('create')} className="hover:text-blue-300 transition">Create Task</button>
            <button onClick={() => setCurrentPage('profile')} className="hover:text-blue-300 transition">Profile</button>
            <button onClick={handleLogout} className="hover:text-blue-300 transition">Logout</button>
          </nav>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">
        {renderPage()}
      </main>

      {/* Footer */}
      {user && (
        <footer className="py-4 text-sm text-gray-400 border-t border-blue-700/50 text-center">
          © {new Date().getFullYear()} TaskHub. All rights reserved.
        </footer>
      )}
    </div>
  );
}

// Login Page Component
function LoginPage({ onLogin, onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin(username, password)) {
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-blue-950/70 backdrop-blur-md rounded-xl shadow-lg border border-blue-700/50">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to TaskHub</h2>
      {error && <div className="text-red-400 mb-4 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-gray-400">
        Don't have an account?{' '}
        <button onClick={onRegister} className="text-blue-400 hover:text-blue-300">
          Register here
        </button>
      </p>
      <div className="mt-6 p-4 bg-blue-900/30 rounded-lg text-sm">
        <p className="font-semibold">Demo Account:</p>
        <p>Username: demo</p>
        <p>Password: demo</p>
      </div>
    </div>
  );
}

// Register Page Component
function RegisterPage({ onRegister, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && name) {
      onRegister(username, password, name);
      setError('');
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-blue-950/70 backdrop-blur-md rounded-xl shadow-lg border border-blue-700/50">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
      {error && <div className="text-red-400 mb-4 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center text-gray-400">
        Already have an account?{' '}
        <button onClick={onLogin} className="text-blue-400 hover:text-blue-300">
          Login here
        </button>
      </p>
    </div>
  );
}

// Dashboard Page Component
function DashboardPage({ tasks, onClaimTask, user }) {
  const availableTasks = tasks.filter(task => task.claimedBy === null);
  const myTasks = tasks.filter(task => task.claimedBy === user.id);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Task Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Available Tasks */}
        <div className="bg-blue-950/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-700/50">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Available Tasks</h3>
          {availableTasks.length === 0 ? (
            <p className="text-gray-400">No tasks available at the moment.</p>
          ) : (
            <div className="space-y-4">
              {availableTasks.map(task => (
                <div key={task.id} className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-semibold">{task.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{task.description}</p>
                  <button
                    onClick={() => onClaimTask(task.id)}
                    className="mt-3 px-3 py-1 text-sm bg-blue-600 hover:bg-blue-500 rounded-lg transition"
                  >
                    Claim Task
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* My Tasks */}
        <div className="bg-blue-950/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-700/50">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">My Tasks</h3>
          {myTasks.length === 0 ? (
            <p className="text-gray-400">You haven't claimed any tasks yet.</p>
          ) : (
            <div className="space-y-4">
              {myTasks.map(task => (
                <div key={task.id} className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-semibold">{task.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{task.description}</p>
                  <div className="mt-2 text-xs text-green-400">Claimed by you</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Create Task Page Component
function CreateTaskPage({ onCreateTask, user }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onCreateTask(title, description);
      setTitle('');
      setDescription('');
      alert('Task created successfully!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Create New Task</h2>
      <form onSubmit={handleSubmit} className="bg-blue-950/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-700/50">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition font-semibold"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

// Profile Page Component
function ProfilePage({ user }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">User Profile</h2>
      <div className="bg-blue-950/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-700/50">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-400">@{user.username}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-900/30 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-300">Member Since</h4>
            <p>Today</p>
          </div>
          <div className="bg-blue-900/30 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-300">User ID</h4>
            <p>{user.id}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Account Actions</h4>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg transition text-sm">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}