import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/10"
    >
      {icon}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};
