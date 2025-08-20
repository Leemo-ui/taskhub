import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full py-4 px-8 flex justify-between items-center bg-blue-950/80 backdrop-blur-md shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">TaskHub</h1>
        <nav className="space-x-6 text-gray-200">
          <a href="#home" className="hover:text-blue-300 transition">Home</a>
          <a href="#features" className="hover:text-blue-300 transition">Features</a>
          <a href="#cta" className="hover:text-blue-300 transition">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main
        id="home"
        className="flex flex-col items-center justify-center flex-1 text-center px-6 relative overflow-hidden"
      >
        {/* Floating Background Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>

        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text animate-fade-in">
          Organize Your Tasks Effortlessly
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-8 animate-fade-in-delay">
          TaskHub helps you stay on top of your work with an intuitive and powerful task management system.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-md hover:shadow-blue-600/50"
          >
            Get Started
          </button>
          <a
            href="#features"
            className="px-6 py-3 rounded-lg border border-blue-400 text-blue-300 hover:bg-blue-800/50 transition font-semibold"
          >
            Learn More
          </a>
        </div>

        {/* Task Preview Cards */}
        <section
          id="features"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl px-6"
        >
          {[
            { title: "Plan Smarter", desc: "Break down work into simple, actionable tasks." },
            { title: "Stay Organized", desc: "Easily track progress and never miss a deadline." },
            { title: "Boost Productivity", desc: "Focus on what matters and get more done." },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-blue-950/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-700/50 hover:border-blue-400 transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Call To Action Section */}
      <section
        id="cta"
        className="bg-gradient-to-r from-blue-800 to-blue-700 text-center py-16 px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to take control of your tasks?</h2>
        <p className="text-gray-300 mb-6">Join TaskHub today and experience stress-free task management.</p>
        <button
          onClick={() => setShowModal(true)}
          className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-lg hover:shadow-blue-600/50"
        >
          Create Your Account
        </button>
      </section>

      {/* Footer */}
      <footer className="py-4 text-sm text-gray-400 border-t border-blue-700/50 text-center">
        © {new Date().getFullYear()} TaskHub. All rights reserved.
      </footer>

      {/* Modal (Get Started) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-blue-950 p-8 rounded-xl shadow-lg max-w-md w-full text-center">
            <h3 className="text-2xl font-bold mb-4">🚀 Welcome to TaskHub!</h3>
            <p className="text-gray-300 mb-6">
              Sign up to start organizing your tasks and boosting your productivity.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
