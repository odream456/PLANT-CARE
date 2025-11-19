import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/plants', label: 'Plants' },
    { path: '/care', label: 'Care Guide' },
    { path: '/chat', label: 'Chat' },
    { path: '/ai-analyser', label: 'AI Analyser' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-emerald-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌱</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-emerald-800">Plant Care</h1>
                <p className="text-xs text-emerald-600 -mt-1">Nurture Nature</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="px-4 py-2 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-emerald-700 hover:bg-emerald-50 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-emerald-100 p-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="block px-4 py-3 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium mt-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;