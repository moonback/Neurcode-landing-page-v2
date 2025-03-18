import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { Code, Zap, Users } from 'lucide-react';

const Features: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    {
      icon: <Code className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "Assistance Intelligente",
      description: "Suggestions de code contextuelles et correction d'erreurs en temps réel."
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "Développement Rapide",
      description: "Automatisation des tâches répétitives et génération de code optimisé."
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "Collaboration",
      description: "Travaillez en équipe avec une IA qui comprend votre contexte projet."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          {...fadeInUp}
          className="text-4xl font-bold text-center mb-4"
        >
          Fonctionnalités Principales
        </motion.h2>
        <motion.p 
          {...fadeInUp}
          className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Découvrez comment NeuroCode transforme votre façon de coder
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
