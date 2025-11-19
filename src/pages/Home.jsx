import React, { useState, useEffect } from 'react';
import { Leaf, Sparkles, ChevronDown, Zap, Trophy, Star } from 'lucide-react';

const Home = ({ setCurrentPage }) => {  // <- setCurrentPage prop ni qo'shish
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const features = [
    {
      icon: '🔍',
      title: 'AI Plant Analysis',
      description: 'Upload plant photos and get instant identification and health analysis'
    },
    {
      icon: '💬',
      title: 'Expert Chat',
      description: 'Get personalized plant care advice from our AI assistant'
    },
    {
      icon: '📊',
      title: 'Care Tracking',
      description: 'Monitor your plant\'s growth and health over time'
    }
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 100);
    const timer2 = setTimeout(() => setShowContent(true), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-50 via-eco-100 to-eco-200">
        {/* Floating Leaves */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 text-eco-400/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            <Leaf className="w-full h-full" />
          </div>
        ))}
        
        {/* Pulse Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eco-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-eco-300/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-eco-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Hero Section - Cinematic Entrance */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-12">
          
          {/* Main Title with Staggered Animation */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Eco Text Effect */}
            <div className="relative">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="relative">
                  <Leaf className="w-20 h-20 text-eco-500" />
                  <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-eco-400 animate-pulse" />
                </div>
                <h1 className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-eco-600 via-eco-500 to-eco-400 bg-clip-text text-transparent tracking-tight leading-none">
                  Plantcare
                </h1>
              </div>
              
              {/* Multi-layer Glow */}
              <div className="absolute inset-0 text-7xl lg:text-8xl font-black bg-gradient-to-r from-eco-600 via-eco-500 to-eco-400 blur-2xl opacity-20 -z-10 animate-pulse"></div>
              
              {/* Scanning Line Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-eco-400/10 to-transparent opacity-0 animate-scan" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Subtitle with Typewriter Effect */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-2xl lg:text-3xl text-eco-700 font-light max-w-3xl mx-auto leading-relaxed">
                Your AI-powered companion for{' '}
                <span className="text-eco-500 font-semibold animate-pulse">healthier</span>,{' '}
                <span className="text-eco-600 font-semibold animate-pulse" style={{animationDelay: '1s'}}>happier plants</span>.
                <br />
                <span className="text-eco-400 font-semibold">Grow smarter, not harder</span>.
              </p>
            </div>
          </div>

          {/* CTA Buttons with Staggered Entrance */}
          <div className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Start Analysis Button */}
            <button 
              onClick={() => setCurrentPage('ai-analyser')}  // <- onClick qo'shildi
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-eco-500 to-eco-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              <div className="relative px-12 py-6 bg-gradient-to-r from-eco-500 to-eco-600 rounded-xl overflow-hidden border-0 text-white font-bold text-lg tracking-widest">
                <div className="absolute inset-0 bg-gradient-to-r from-eco-400 to-eco-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative flex items-center gap-3">
                  <Zap className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span>START ANALYSIS</span>
                </div>
              </div>
            </button>
            
            {/* Plant Chat Button */}
            <button 
              onClick={() => setCurrentPage('chat')}  // <- onClick qo'shildi
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-eco-400 to-eco-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative px-12 py-6 bg-white rounded-xl overflow-hidden border-2 border-eco-300 text-eco-600 font-bold text-lg tracking-widest">
                <div className="relative flex items-center gap-3">
                  <Leaf className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span>PLANT CHAT</span>
                </div>
              </div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className={`transform transition-all duration-1000 delay-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex flex-col items-center gap-2 text-eco-600/50 animate-bounce">
              <span className="text-sm tracking-widest">EXPLORE</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </section>

        {/* Content Section - Appears on Scroll */}
        <section className={`min-h-screen flex flex-col justify-center space-y-16 py-20 transform transition-all duration-1000 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Plants Identified */}
            <div className="p-8 text-center group relative overflow-hidden border-0 bg-white rounded-3xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-500/10 to-eco-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-eco-400 to-eco-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <Leaf className="w-20 h-20 text-eco-500 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
              <div className="text-5xl font-black text-eco-600 mb-4 bg-gradient-to-r from-eco-500 to-eco-600 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-eco-500 font-semibold tracking-widest text-lg">PLANTS IDENTIFIED</div>
            </div>

            {/* Accuracy Rate */}
            <div className="p-8 text-center group relative overflow-hidden border-0 bg-white rounded-3xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-400/10 to-eco-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-eco-300 to-eco-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <Trophy className="w-20 h-20 text-eco-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
              <div className="text-5xl font-black text-eco-600 mb-4 bg-gradient-to-r from-eco-400 to-eco-500 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-eco-500 font-semibold tracking-widest text-lg">ACCURACY RATE</div>
            </div>

            {/* Plant Species */}
            <div className="p-8 text-center group relative overflow-hidden border-0 bg-white rounded-3xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-600/10 to-eco-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-eco-500 to-eco-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <Star className="w-20 h-20 text-eco-600 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 fill-eco-600/20" />
              <div className="text-5xl font-black text-eco-600 mb-4 bg-gradient-to-r from-eco-600 to-eco-700 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-eco-500 font-semibold tracking-widest text-lg">PLANT SPECIES</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-eco-100 hover:border-eco-300 hover:transform hover:scale-105"
              >
                <div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-eco-600 mb-4">
                  {feature.title}
                </h3>
                <p className="text-eco-700 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            
            {/* How It Works */}
            <div className="p-8 group relative overflow-hidden border-0 bg-white rounded-3xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-500/5 to-eco-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-eco-400 to-eco-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <h3 className="text-3xl font-bold text-eco-500 mb-8 flex items-center gap-4">
                <div className="p-3 bg-eco-500/20 rounded-xl border border-eco-400/30 group-hover:scale-110 transition-transform duration-300">
                  🌱
                </div>
                HOW IT WORKS
              </h3>
              
              <ul className="space-y-4 text-eco-700 text-lg">
                {[
                  "Upload plant photos for instant identification",
                  "Get detailed health analysis and care tips",
                  "Chat with AI expert for personalized advice",
                  "Track your plant's growth over time",
                  "Learn about optimal care conditions"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-eco-50 hover:bg-eco-100 transition-all duration-300 group/item border border-eco-100 hover:border-eco-300"
                  >
                    <div className="w-3 h-3 bg-eco-400 rounded-full group-hover/item:scale-150 transition-transform duration-300 shadow-lg shadow-eco-400/50"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="p-8 group relative overflow-hidden border-0 bg-white rounded-3xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-400/5 to-eco-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-eco-300 to-eco-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <h3 className="text-3xl font-bold text-eco-400 mb-8 flex items-center gap-4">
                <div className="p-3 bg-eco-400/20 rounded-xl border border-eco-300/30 group-hover:scale-110 transition-transform duration-300">
                  ✨
                </div>
                WHY CHOOSE US
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: "🔬", text: "Advanced AI plant recognition" },
                  { icon: "💡", text: "Smart care recommendations" },
                  { icon: "📱", text: "24/7 plant expert access" },
                  { icon: "🌍", text: "Global plant database" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-5 rounded-xl bg-eco-50 hover:bg-eco-100 transition-all duration-300 group/item border border-eco-100 hover:border-eco-300"
                  >
                    <div className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-eco-700 text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;