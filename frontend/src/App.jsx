import { useState, useEffect } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Auto-rotate features
  useEffect(() => {
    if (showModal) return;
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [showModal]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col text-white overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full py-4 px-4 md:px-8 flex justify-between items-center bg-blue-950/90 backdrop-blur-md shadow-lg border-b border-blue-700/30">
        <h1 className="text-2xl font-bold tracking-wide flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          TaskHub
        </h1>
        <nav className="hidden md:flex space-x-6 text-gray-200">
          <a href="#home" className="hover:text-blue-300 transition-all duration-300 hover:scale-105">Home</a>
          <a href="#features" className="hover:text-blue-300 transition-all duration-300 hover:scale-105">Features</a>
          <a href="#cta" className="hover:text-blue-300 transition-all duration-300 hover:scale-105">Get Started</a>
        </nav>
        <button 
          onClick={() => setShowModal(true)}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-blue-600/50 hover:scale-105"
        >
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <main
        id="home"
        className="flex flex-col items-center justify-center flex-1 text-center px-4 py-12 md:py-24 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 md:left-20 w-60 h-60 md:w-72 md:h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 md:right-20 w-80 h-80 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Animated dots */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text animate-fade-in">
            Organize Your Tasks <span className="text-white">Effortlessly</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mb-8 animate-fade-in-delay leading-relaxed">
            TaskHub helps you stay on top of your work with an intuitive and powerful task management system designed for individuals and teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-md hover:shadow-blue-600/50 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Get Started Free
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a
              href="#features"
              className="px-6 py-3 rounded-lg border border-blue-400 text-blue-300 hover:bg-blue-800/50 transition-all duration-300 font-semibold hover:scale-105"
            >
              See Features
            </a>
          </div>
          
          {/* App Preview */}
          <div className="mt-16 mx-auto max-w-4xl bg-blue-900/30 backdrop-blur-md p-6 rounded-2xl border border-blue-700/30 shadow-2xl shadow-blue-900/30 transform hover:scale-[1.02] transition-transform duration-700">
            <div className="bg-blue-950 rounded-lg p-4 border border-blue-800/50">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {['To Do', 'In Progress', 'Completed'].map((status, i) => (
                  <div key={i} className="bg-blue-900/40 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-200 flex items-center gap-2">
                      <span className={`inline-block w-3 h-3 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
                      {status}
                    </h4>
                    <div className="space-y-3">
                      {[
                        'Design new dashboard',
                        'Write project proposal',
                        'Team meeting preparation'
                      ].map((task, j) => (
                        <div key={j} className="bg-blue-800/30 p-3 rounded-md border border-blue-700/30 text-sm">
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section
          id="features"
          className="mt-28 md:mt-40 w-full max-w-6xl px-4"
        >
          <h3 className="text-3xl font-bold mb-2">Why Choose TaskHub?</h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Designed with productivity and simplicity in mind</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "Plan Smarter", 
                desc: "Break down work into simple, actionable tasks with our intuitive interface.",
                icon: "📋"
              },
              { 
                title: "Stay Organized", 
                desc: "Easily track progress, set reminders, and never miss a deadline again.",
                icon: "✅"
              },
              { 
                title: "Boost Productivity", 
                desc: "Focus on what matters most with smart prioritization and clean design.",
                icon: "🚀"
              },
            ].map((card, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveFeature(idx)}
                className={`bg-blue-950/70 backdrop-blur-md p-6 rounded-xl shadow-lg border transition-all duration-500 cursor-default
                  ${activeFeature === idx 
                    ? 'border-blue-400/70 scale-105 shadow-xl shadow-blue-900/30' 
                    : 'border-blue-700/50 hover:border-blue-500/50'}`}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Call To Action Section */}
      <section
        id="cta"
        className="bg-gradient-to-r from-blue-800 to-blue-700 text-center py-16 px-6 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-white" style={{backgroundImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5) 50%, transparent)'}}></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white" style={{backgroundImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5) 50%, transparent)'}}></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your productivity?</h2>
          <p className="text-blue-100 mb-8 text-lg">Join thousands of users who are already managing their tasks efficiently with TaskHub.</p>
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-600/50 hover:scale-105 inline-flex items-center gap-2 group"
          >
            Create Your Free Account
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="mt-4 text-blue-200 text-sm">No credit card required. Free forever plan available.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-sm text-gray-400 border-t border-blue-700/30">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              TaskHub
            </h4>
            <p className="max-w-xs">The intuitive task management solution for individuals and teams.</p>
          </div>
          
          {['Product', 'Company', 'Resources', 'Legal'].map((category, i) => (
            <div key={i}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Case studies', 'Blog'].slice(0, 4).map((item, j) => (
                  <li key={j}><a href="#" className="hover:text-blue-300 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-blue-700/30 text-center">
          © {new Date().getFullYear()} TaskHub. All rights reserved.
        </div>
      </footer>

      {/* Modal (Get Started) */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-gradient-to-br from-blue-950 to-blue-900 p-8 rounded-2xl shadow-2xl border border-blue-700/30 max-w-md w-full text-center"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-800/50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Welcome to TaskHub!</h3>
            <p className="text-gray-300 mb-6">
              Sign up to start organizing your tasks and boosting your productivity.
            </p>
            
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                <input 
                  type="password" 
                  placeholder="Create a secure password"
                  className="w-full bg-blue-900/50 border border-blue-700/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button
                type="button"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-semibold shadow-md mt-2"
              >
                Create Account
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-6">
              Already have an account? <button className="text-blue-400 hover:text-blue-300 font-medium">Sign In</button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}