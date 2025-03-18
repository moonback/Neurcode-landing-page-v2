import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-white/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-cyan-400/20 flex items-center justify-center"
          >
            <Cpu className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-6">
            Prêt à révolutionner votre développement ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez plus de 1000 développeurs qui utilisent déjà NeuroCode et 
            transformez votre façon de coder.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg"
          >
            Commencer maintenant 🎯
          </motion.button>
          
          <p className="mt-4 text-gray-400">
            Essai gratuit de 14 jours • Pas de carte de crédit requise
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
