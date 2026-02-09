'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  itemCount: number;
  onUpdateCart: (count: number) => void;
}

export default function Cart({ isOpen, onClose, itemCount, onUpdateCart }: CartProps) {
  const itemPrice = 22.99; // Default price
  const subtotal = itemPrice * itemCount;
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert('Merci pour votre commande! La fonctionnalité de paiement sera bientôt disponible.');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-secondary">
                  Votre Panier ({itemCount})
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-3xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {itemCount === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500">Votre panier est vide</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Cart Item */}
                  <div className="flex gap-4 p-4 bg-amber-50 rounded-lg">
                    <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center text-4xl">
                      🥜
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary">Amlou Traditionnel</h3>
                      <p className="text-sm text-gray-600">500g</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => onUpdateCart(Math.max(0, itemCount - 1))}
                          className="w-8 h-8 bg-white border border-gray-300 rounded-full hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="font-semibold">{itemCount}</span>
                        <button
                          onClick={() => onUpdateCart(itemCount + 1)}
                          className="w-8 h-8 bg-white border border-gray-300 rounded-full hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{itemPrice.toFixed(2)}€</p>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="pt-4">
                    <input
                      type="text"
                      placeholder="Code promo"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer - Order Summary */}
            {itemCount > 0 && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Livraison</span>
                    <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                      {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)}€`}
                    </span>
                  </div>
                  {subtotal < 50 && (
                    <p className="text-sm text-orange-600">
                      Ajoutez {(50 - subtotal).toFixed(2)}€ pour la livraison gratuite
                    </p>
                  )}
                  <div className="flex justify-between text-xl font-bold text-secondary pt-3 border-t border-gray-300">
                    <span>Total</span>
                    <span>{total.toFixed(2)}€</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Procéder au Paiement
                </button>

                <div className="mt-4 text-center">
                  <button
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Continuer mes achats
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
