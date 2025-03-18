import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';

const Testimonials: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const testimonials = [
    {
      name: "Thomas Laurent",
      role: "Lead Developer @ TechCorp",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      text: "\"NeuroCode a révolutionné notre façon de coder. La productivité de l'équipe a augmenté de 40% ! Les suggestions sont incroyablement pertinentes et nous font gagner un temps précieux.\""
    },
    {
      name: "Sophie Martin",
      role: "Freelance Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "\"Un outil indispensable pour tout développeur moderne. Les suggestions sont pertinentes et le code généré est propre. Je ne peux plus m'en passer !\""
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          {...fadeInUp}
          className="text-4xl font-bold text-center mb-12"
        >
          Ce que disent nos utilisateurs
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
