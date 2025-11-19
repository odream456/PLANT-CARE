// src/App.jsx
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import './index.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import AiAnalyser from './pages/AiAnalyser'
import Chat from './pages/Chat'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />  // <- setCurrentPage prop qo'shildi
      case 'about':
        return <About />
      case 'ai-analyser':
        return <AiAnalyser />
      case 'chat':
        return <Chat />
      default:
        return <Home setCurrentPage={setCurrentPage} />  // <- bu yerga ham
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-eco-50">
      {/* Main layout container */}
      <div className="flex flex-1">
        {/* Sidebar - fixed position */}
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {/* Main content area - sidebar widthiga margin qo'shildi */}
        <div className="flex-1 flex flex-col min-h-screen lg:ml-20">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-eco-200 flex-shrink-0">
            <div className="px-4 py-3">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg bg-eco-100 text-eco-700 hover:bg-eco-200"
              >
                ☰
              </button>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto p-6">
            {renderPage()}
          </main>

          {/* Footer - endi sidebar ostida emas */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App