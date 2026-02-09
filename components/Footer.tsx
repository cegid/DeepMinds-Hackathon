export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🥜 Amlou</h3>
            <p className="text-gray-300 text-sm">
              La meilleure pâte à tartiner marocaine traditionnelle, 
              fabriquée avec amour et des ingrédients 100% naturels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-primary transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#produit" className="text-gray-300 hover:text-primary transition">
                  Notre Produit
                </a>
              </li>
              <li>
                <a href="#bienfaits" className="text-gray-300 hover:text-primary transition">
                  Bienfaits
                </a>
              </li>
              <li>
                <a href="#commander" className="text-gray-300 hover:text-primary transition">
                  Commander
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 contact@amlou.ma</li>
              <li>📱 +212 6XX XX XX XX</li>
              <li>📍 Casablanca, Maroc</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-3">
              Recevez nos offres exclusives
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary/80 px-4 py-2 rounded-lg text-sm font-semibold transition">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2026 Amlou. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-2xl hover:text-primary transition">📘</a>
              <a href="#" className="text-2xl hover:text-primary transition">📷</a>
              <a href="#" className="text-2xl hover:text-primary transition">🐦</a>
              <a href="#" className="text-2xl hover:text-primary transition">💼</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
