import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full ring-2 ring-cyan-400"
        />
        <div>
          <h4 className="font-bold text-xl">{name}</h4>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">
        {text}
      </p>
      <div className="flex gap-1 mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
        ))}
      </div>
    </motion.div>
  );
};
