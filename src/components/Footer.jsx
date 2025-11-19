// src/components/Footer.jsx
import React, { useState } from 'react';
import { Instagram, Youtube, MessageCircle, Users, Github, Heart, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHeartLiked, setIsHeartLiked] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/odream_321/',
      color: 'hover:text-green-300 hover:shadow-[0_0_15px_rgba(134,239,172,0.4)]'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@ELBEKSHERMAXMATOV',
      color: 'hover:text-green-300 hover:shadow-[0_0_15px_rgba(134,239,172,0.4)]'
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      url: 'https://t.me/ozodbek20100806',
      color: 'hover:text-green-300 hover:shadow-[0_0_15px_rgba(134,239,172,0.4)]'
    },
    {
      name: 'Discord',
      icon: Users,
      url: 'https://discord.gg/odream_321',
      color: 'hover:text-green-300 hover:shadow-[0_0_15px_rgba(134,239,172,0.4)]'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/odream456',
      color: 'hover:text-green-300 hover:shadow-[0_0_15px_rgba(134,239,172,0.4)]'
    }
  ];

  const handleHeartClick = () => {
    setIsHeartLiked(!isHeartLiked);
  };

  return (
    <footer className="bg-gradient-to-t from-green-950/95 to-green-900/90 border-t border-green-700/30 backdrop-blur-lg w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Brand & Social Links */}
          <div className="flex items-center gap-4">
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-base font-semibold text-green-100">PlantCare</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative p-2 rounded-lg border border-green-600/30 
                      bg-green-800/20 backdrop-blur-sm transition-all duration-300
                      transform hover:scale-110 hover:border-green-400/50
                      ${social.color}
                    `}
                    aria-label={`Visit our ${social.name}`}
                  >
                    <Icon className="w-4 h-4 text-green-300/80 group-hover:text-green-200 transition-colors duration-300" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Credits Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleHeartClick}
              className={`
                flex items-center gap-2 px-3 py-1 rounded-lg border backdrop-blur-sm 
                transition-all duration-300 transform hover:scale-105 active:scale-95
                cursor-pointer select-none text-sm
                ${
                  isHeartLiked
                    ? 'bg-green-600/30 border-green-400/50 shadow-[0_0_15px_rgba(74,222,128,0.3)]'
                    : 'bg-green-800/20 border-green-600/30 hover:bg-green-700/30 hover:border-green-400/40'
                }
              `}
            >
              <div className="relative">
                <Heart
                  className={`
                    w-3 h-3 transition-all duration-300
                    ${
                      isHeartLiked
                        ? 'text-green-300 fill-green-300 scale-125'
                        : 'text-green-400 group-hover:scale-110'
                    }
                  `}
                />
                {isHeartLiked && (
                  <div className="absolute inset-0 w-3 h-3 bg-green-300 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
              <span className={`
                transition-colors duration-300
                ${
                  isHeartLiked
                    ? 'text-green-200'
                    : 'text-green-300/80 hover:text-green-200'
                }
              `}>
                Ozodbek
              </span>
            </button>

            <button
              onClick={handleHeartClick}
              className={`
                flex items-center gap-2 px-3 py-1 rounded-lg border backdrop-blur-sm 
                transition-all duration-300 transform hover:scale-105 active:scale-95
                cursor-pointer select-none text-sm
                ${
                  isHeartLiked
                    ? 'bg-green-600/30 border-green-400/50 shadow-[0_0_15px_rgba(74,222,128,0.3)]'
                    : 'bg-green-800/20 border-green-600/30 hover:bg-green-700/30 hover:border-green-400/40'
                }
              `}
            >
              <div className="relative">
                <Heart
                  className={`
                    w-3 h-3 transition-all duration-300
                    ${
                      isHeartLiked
                        ? 'text-green-300 fill-green-300 scale-125'
                        : 'text-green-400 group-hover:scale-110'
                    }
                  `}
                />
              </div>
              <span className={`
                transition-colors duration-300
                ${
                  isHeartLiked
                    ? 'text-green-200'
                    : 'text-green-300/80 hover:text-green-200'
                }
              `}>
                @jakhon_dev
              </span>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-green-300/70 text-sm">
            <div className="px-3 py-1 rounded-lg bg-green-800/20 border border-green-600/30 backdrop-blur-sm">
              © {currentYear} PlantCare
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-3 pt-3 border-t border-green-700/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-400/60">
            <div className="flex items-center gap-3">
              <span>© 2025 Plantcare. All rights reserved. Made with 💚 for plants.</span>
              <span className="hidden sm:inline">•</span>
              <span>All rights reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span>Eco System Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;