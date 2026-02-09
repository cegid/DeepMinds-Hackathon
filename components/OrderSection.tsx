'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface OrderSectionProps {
  onAddToCart: (quantity: number) => void;
}

const pricingOptions = [
  {
    id: 1,
    size: '250g',
    price: 12.99,
    oldPrice: 15.99,
    popular: false
  },
  {
    id: 2,
    size: '500g',
    price: 22.99,
    oldPrice: 28.99,
    popular: true
  },
  {
    id: 3,
    size: '1kg',
    price: 39.99,
    oldPrice: 49.99,
    popular: false
  }
];

export default function OrderSection({ onAddToCart }: OrderSectionProps) {
  const [selectedOption, setSelectedOption] = useState(pricingOptions[1]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(quantity);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Commandez Votre Amlou
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Livraison gratuite à partir de 50€ • Satisfaction garantie ou remboursé
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Pricing Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingOptions.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedOption(option)}
                className={`relative cursor-pointer p-6 rounded-2xl border-2 transition-all ${
                  selectedOption.id === option.id
                    ? 'border-primary bg-primary/10 shadow-xl'
                    : 'border-gray-200 bg-white hover:border-primary/50'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Le Plus Populaire
                  </div>
                )}
                
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary mb-2">{option.size}</p>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-primary">{option.price}€</span>
                    <span className="text-lg text-gray-400 line-through ml-2">{option.oldPrice}€</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {(option.price / parseFloat(option.size)).toFixed(2)}€ / 100g
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Quantité
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full font-bold text-xl transition"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-secondary w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full font-bold text-xl transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex flex-col justify-center items-end">
                <p className="text-sm text-gray-600 mb-2">Total</p>
                <p className="text-4xl font-bold text-primary">
                  {(selectedOption.price * quantity).toFixed(2)}€
                </p>
                {selectedOption.price * quantity >= 50 && (
                  <p className="text-sm text-green-600 font-semibold mt-2">
                    ✓ Livraison gratuite!
                  </p>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-4 rounded-full font-bold text-lg transition-all transform ${
                isAdding
                  ? 'bg-green-500 text-white scale-95'
                  : 'bg-primary hover:bg-secondary text-white hover:scale-105'
              } shadow-lg`}
            >
              {isAdding ? '✓ Ajouté au panier!' : '🛒 Ajouter au Panier'}
            </button>

            {/* Payment Methods */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600 mb-4">
                Paiement sécurisé avec
              </p>
              <div className="flex justify-center gap-6 items-center">
                <div className="text-3xl">💳</div>
                <div className="text-3xl">🔒</div>
                <div className="text-3xl">✓</div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-4">
                Visa • Mastercard • PayPal • Virement bancaire
              </p>
            </div>
          </motion.div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-2">🚚</div>
              <p className="font-semibold text-secondary">Livraison Rapide</p>
              <p className="text-sm text-gray-600">2-3 jours ouvrés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔄</div>
              <p className="font-semibold text-secondary">Retour Gratuit</p>
              <p className="text-sm text-gray-600">30 jours pour changer d'avis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✨</div>
              <p className="font-semibold text-secondary">Qualité Garantie</p>
              <p className="text-sm text-gray-600">100% satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
