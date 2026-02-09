'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '💪',
    title: 'Riche en Nutriments',
    description: 'Source excellente de protéines végétales, vitamines E et acides gras essentiels'
  },
  {
    icon: '🫀',
    title: 'Bon pour le Cœur',
    description: 'L\'huile d\'argan aide à réduire le cholestérol et protège le système cardiovasculaire'
  },
  {
    icon: '⚡',
    title: 'Énergie Durable',
    description: 'Combinaison parfaite de protéines et glucides pour une énergie longue durée'
  },
  {
    icon: '✨',
    title: 'Anti-âge Naturel',
    description: 'Riche en antioxydants qui combattent le vieillissement cellulaire'
  },
  {
    icon: '🧠',
    title: 'Renforce le Cerveau',
    description: 'Les acides gras oméga favorisent les fonctions cognitives et la mémoire'
  },
  {
    icon: '🌿',
    title: '100% Naturel',
    description: 'Sans conservateurs, colorants ou additifs artificiels'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Les Bienfaits de l'Amlou
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une pâte délicieuse qui prend soin de votre santé
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
