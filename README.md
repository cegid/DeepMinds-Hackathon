# Amlou - E-commerce Single Page Application

Une application web e-commerce moderne pour Amlou, la délicieuse pâte à tartiner marocaine traditionnelle. Construite avec Next.js 14, React, TypeScript et Tailwind CSS.

## 🥜 À propos

Amlou est une pâte à tartiner traditionnelle marocaine fabriquée à partir d'amandes grillées, d'huile d'argan pure et de miel naturel. Cette application offre une expérience d'achat complète et immersive.

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive
- 🛒 Système de panier avec gestion de quantité
- 💳 Section de commande avec différentes tailles de produit
- ⭐ Témoignages clients
- 📱 Navigation fluide avec animations
- 🚀 Performance optimisée avec Next.js 14
- 🎭 Animations élégantes avec Framer Motion
- 💅 Styles personnalisés avec Tailwind CSS

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

1. Installer les dépendances:
```bash
npm install
# ou
yarn install
```

2. Lancer le serveur de développement:
```bash
npm run dev
# ou
yarn dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint

## 🛠️ Technologies utilisées

- **Framework**: Next.js 14
- **UI**: React 18
- **Langage**: TypeScript
- **Styles**: Tailwind CSS
- **Animations**: Framer Motion
- **Icônes**: React Icons

## 📁 Structure du projet

```
├── app/
│   ├── api/           # Routes API backend
│   ├── layout.tsx     # Layout principal
│   ├── page.tsx       # Page d'accueil
│   └── globals.css    # Styles globaux
├── components/
│   ├── Hero.tsx       # Section héro
│   ├── ProductInfo.tsx # Informations produit
│   ├── Features.tsx   # Caractéristiques
│   ├── Gallery.tsx    # Galerie
│   ├── Testimonials.tsx # Témoignages
│   ├── OrderSection.tsx # Section commande
│   ├── Cart.tsx       # Panier
│   └── Footer.tsx     # Pied de page
└── public/            # Assets statiques
```

## 🎨 Personnalisation

Les couleurs principales peuvent être modifiées dans `tailwind.config.ts`:

```typescript
colors: {
  primary: "#D4A574",    // Couleur principale (doré)
  secondary: "#8B4513",  // Couleur secondaire (marron)
  accent: "#F4E4C1",     // Couleur d'accent (beige)
}
```

## 🔌 API Routes

- `POST /api/orders` - Créer une nouvelle commande
- `GET /api/orders` - Obtenir la liste des produits
- `POST /api/newsletter` - S'inscrire à la newsletter
- `POST /api/contact` - Envoyer un message de contact

## 🚀 Déploiement

### Vercel (Recommandé)

Le moyen le plus simple de déployer cette application Next.js est d'utiliser [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Autres plateformes

L'application peut également être déployée sur:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Azure

## 📝 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Développement

Créé avec ❤️ pour le Hackathon DeepMinds

---

**Note**: Cette application est un prototype. Pour une utilisation en production, vous devrez:
- Intégrer un vrai système de paiement (Stripe, PayPal, etc.)
- Ajouter une base de données (PostgreSQL, MongoDB, etc.)
- Configurer l'authentification utilisateur
- Implémenter la gestion des stocks
- Ajouter un système de tracking de commandes