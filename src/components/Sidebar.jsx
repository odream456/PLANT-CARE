// src/components/Sidebar.jsx
import React from 'react';
import { 
  Home, 
  Info,
  Search,
  MessageCircle,
  Leaf
} from 'lucide-react';

const Sidebar = ({ isOpen, onToggle, currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: Info, label: 'About' },
    { id: 'ai-analyser', icon: Search, label: 'AI Analyser' },
    { id: 'chat', icon: MessageCircle, label: 'Plant Chat' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:fixed inset-y-0 left-0 z-50
        w-20 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full bg-white/95 backdrop-blur-md border-r border-eco-200 shadow-lg">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 p-4 border-b border-eco-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-eco-500 to-eco-600 shadow-md">
              <Leaf className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    window.innerWidth < 1024 && onToggle();
                  }}
                  className={`
                    group relative flex items-center justify-center w-14 h-14 rounded-xl
                    transition-all duration-200 ease-out flex-shrink-0
                    ${isActive 
                      ? 'bg-gradient-to-br from-eco-500/20 to-eco-400/20 border border-eco-400/40 shadow-sm' 
                      : 'bg-eco-50/50 border border-eco-200 hover:bg-eco-100 hover:border-eco-300'
                    }
                  `}
                >
                  <Icon className={`
                    w-5 h-5 transition-all duration-200
                    ${isActive 
                      ? 'text-eco-600' 
                      : 'text-eco-500 group-hover:text-eco-600'
                    }
                  `} />
                  
                  {/* Tooltip */}
                  <div className="absolute left-full ml-3 px-2 py-1.5 bg-eco-600/95 backdrop-blur-sm rounded-md text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg border border-eco-400/30 z-50">
                    {item.label}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-eco-600/95 rotate-45 border-l border-t border-eco-400/30"></div>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;