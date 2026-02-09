'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Fatima L.',
    location: 'Paris, France',
    rating: 5,
    comment: 'Absolument délicieux! Ça me rappelle les petits-déjeuners chez ma grand-mère au Maroc. La qualité est exceptionnelle.',
    avatar: '👩'
  },
  {
    name: 'Mohammed B.',
    location: 'Casablanca, Maroc',
    rating: 5,
    comment: 'Le meilleur Amlou que j\'ai goûté en dehors de ma région natale. Texture parfaite et goût authentique!',
    avatar: '👨'
  },
  {
    name: 'Sophie M.',
    location: 'Lyon, France',
    rating: 5,
    comment: 'Je ne peux plus m\'en passer! C\'est devenu un incontournable de mes petits-déjeuners. Mes enfants adorent aussi!',
    avatar: '👩‍🦰'
  },
  {
    name: 'Karim Z.',
    location: 'Bruxelles, Belgique',
    rating: 5,
    comment: 'Produit de qualité premium. L\'huile d\'argan apporte vraiment une dimension unique. Je recommande à 100%!',
    avatar: '👨‍🦱'
  },
  {
    name: 'Amina K.',
    location: 'Rabat, Maroc',
    rating: 5,
    comment: 'Enfin un Amlou comme celui de ma maman! Les ingrédients sont de première qualité et le goût est incomparable.',
    avatar: '👩‍🦱'
  },
  {
    name: 'Pierre D.',
    location: 'Marseille, France',
    rating: 5,
    comment: 'J\'ai découvert l\'Amlou lors d\'un voyage au Maroc et je suis ravi de pouvoir en commander. Livraison rapide et produit parfait!',
    avatar: '👨‍🦳'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 500 clients satisfaits à travers le monde
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-3xl text-yellow-400">⭐</span>
            ))}
            <span className="text-xl font-semibold text-gray-700 ml-2">4.9/5</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
