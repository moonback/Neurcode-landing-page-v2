import React from 'react';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-4 py-12 border-t border-white/10">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-cyan-400" />
            <span className="font-bold">NeuroCode</span>
          </div>
          <p className="text-gray-400">
            L'assistant IA qui révolutionne le développement web.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Produit</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-cyan-400">Features</a></li>
            <li><a href="#" className="hover:text-cyan-400">Pricing</a></li>
            <li><a href="#" className="hover:text-cyan-400">Documentation</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Ressources</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400">Tutoriels</a></li>
            <li><a href="#" className="hover:text-cyan-400">Support</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Suivez-nous</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>© 2024 NeuroCode. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
