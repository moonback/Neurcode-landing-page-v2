import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Demo: React.FC = () => {
  const demoFeatures = [
    "Suggestions de code intelligentes",
    "Correction d'erreurs en temps réel",
    "Génération de tests automatisés",
    "Documentation automatique"
  ];

  return (
    <section id="demo" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Voyez NeuroCode en action</h2>
              <p className="text-xl text-gray-300 mb-8">
                Une interface intuitive qui s'adapte à votre style de code et anticipe vos besoins.
              </p>
              <ul className="space-y-4">
                {demoFeatures.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-gray-900 rounded-xl p-4 border border-white/10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm font-mono">
                  <code className="text-cyan-400">// NeuroCode suggestion</code>
                  <br />
                  <code className="text-white">function calculateTotal(items) {'{'}</code>
                  <br />
                  <code className="text-purple-400">  return</code>
                  <code className="text-white"> items.reduce(</code>
                  <br />
                  <code className="text-white">    (sum, item) =&gt; sum + item.price,</code>
                  <br />
                  <code className="text-white">    0</code>
                  <br />
                  <code className="text-white">  );</code>
                  <br />
                  <code className="text-white">{'}'}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
