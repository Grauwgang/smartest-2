import React from 'react';
import { Brain, Twitter, Disc as Discord, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-matte-black border-t border-light-gray">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-neon-green mr-2" />
              <span className="text-xl font-bold text-white">
                $<span className="text-neon-green">SMARTEST</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              The first IQ-as-a-Coin project. Earn tokens with your big brain energy and meme skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-gray flex items-center justify-center hover:bg-electric-purple transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-gray flex items-center justify-center hover:bg-electric-purple transition-colors">
                <Discord className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-gray flex items-center justify-center hover:bg-electric-purple transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'How It Works', 'Features', 'Roadmap', 'Leaderboard', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-neon-green transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates on $SMARTEST.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-dark-gray border border-light-gray rounded-l-md py-2 px-4 flex-grow text-white focus:outline-none focus:border-neon-green"
              />
              <button className="bg-neon-green text-black font-bold py-2 px-4 rounded-r-md hover:bg-opacity-80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-light-gray mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} $SMARTEST. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-neon-green mr-6">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-neon-green">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;