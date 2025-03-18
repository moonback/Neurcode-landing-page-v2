import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/50 border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <span className="text-2xl font-bold">NeuroCode</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#demo" className="hover:text-cyan-400 transition-colors">Demo</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Témoignages</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-400 text-gray-900 px-6 py-2 rounded-lg font-semibold"
            >
              Essayer
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
