export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center justify-center text-white">
      {/* Navbar */}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-blue-950/80 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">TaskHub</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-300 transition">Home</a>
          <a href="#" className="hover:text-blue-300 transition">Tasks</a>
          <a href="#" className="hover:text-blue-300 transition">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
          Organize Your Tasks Effortlessly
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          TaskHub helps you stay on top of your work with an intuitive and powerful task management system.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg border border-blue-400 text-blue-300 hover:bg-blue-800/50 transition font-semibold">
            Learn More
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} TaskHub. All rights reserved.
      </footer>
    </div>
  )
}
