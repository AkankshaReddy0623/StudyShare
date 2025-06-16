import React, { useState } from 'react';
import { Instagram, Linkedin, ExternalLink, Heart, Code } from 'lucide-react';

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 mt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center animate-slide-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-blue-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Created by Aravind
              </h3>
              <Heart className="h-5 w-5 text-red-400 animate-pulse" />
            </div>
            <p className="text-white/60 text-sm">Connect with me on social media</p>
          </div>
          
          <div className="flex items-center space-x-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="https://instagram.com/techy.aravind"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredSocial('instagram')}
              onMouseLeave={() => setHoveredSocial(null)}
              className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-pink-500/25 shimmer-effect"
            >
              <Instagram className={`h-5 w-5 transition-transform duration-300 ${hoveredSocial === 'instagram' ? 'animate-bounce' : ''}`} />
              <span className="font-medium">Instagram</span>
              <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/aravind-pulluri-101291334/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredSocial('linkedin')}
              onMouseLeave={() => setHoveredSocial(null)}
              className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25 shimmer-effect"
            >
              <Linkedin className={`h-5 w-5 transition-transform duration-300 ${hoveredSocial === 'linkedin' ? 'animate-bounce' : ''}`} />
              <span className="font-medium">LinkedIn</span>
              <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
          
          <div className="text-center pt-6 border-t border-white/10 w-full animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-white/40 text-sm flex items-center justify-center space-x-2">
              <span>© 2024 StudyShare. Built with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for students.</span>
            </p>
            <div className="mt-2 flex justify-center">
              <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}