import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { StatCard } from './StatCard';

interface HeroProps {
  stats: Array<{
    number: string;
    label: string;
  }>;
}

const Hero: React.FC<HeroProps> = ({ stats }) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="bg-cyan-400/20 backdrop-blur-xl rounded-full px-6 py-2 text-cyan-400">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Nouvelle Version 2.0 Disponible
            </span>
          </div>
        </motion.div>
        
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
          L'IA qui code avec vous 
          <span className="inline-block ml-2">💡</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Boostez votre productivité avec NeuroCode - Un assistant IA avancé qui comprend votre code, 
          suggère des solutions intelligentes et accélère votre développement web.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg"
          >
            Essayez gratuitement maintenant ! 🚀
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-lg font-bold text-lg border border-white/20"
          >
            Voir la démo ▶️
          </motion.button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
