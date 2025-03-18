import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ number, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
    >
      <div className="text-4xl font-bold text-cyan-400 mb-2">{number}</div>
      <div className="text-gray-300">{label}</div>
    </motion.div>
  );
};
