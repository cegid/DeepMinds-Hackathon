# Guide de démarrage - Amlou E-commerce

## Installation et lancement

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

### 3. Construire pour la production

```bash
npm run build
npm start
```

## Structure de l'application

### Pages et composants

- **Hero** : Section d'accueil avec présentation du produit
- **ProductInfo** : Informations détaillées sur l'Amlou (ingrédients, valeurs nutritionnelles)
- **Features** : Les bienfaits santé de l'Amlou
- **Gallery** : Suggestions de dégustation
- **Testimonials** : Avis clients
- **OrderSection** : Section de commande avec sélection de taille et quantité
- **Cart** : Panier latéral avec récapitulatif
- **Footer** : Pied de page avec liens et newsletter

### Routes API

#### POST /api/orders
Créer une nouvelle commande

```json
{
  "items": [...],
  "customerInfo": {...},
  "total": 45.98
}
```

#### GET /api/orders
Obtenir la liste des produits disponibles

#### POST /api/newsletter
S'inscrire à la newsletter

```json
{
  "email": "example@email.com"
}
```

#### POST /api/contact
Envoyer un message de contact

```json
{
  "name": "John Doe",
  "email": "john@email.com",
  "message": "..."
}
```

## Personnalisation

### Couleurs

Modifiez les couleurs dans [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: "#D4A574",    // Couleur dorée
  secondary: "#8B4513",  // Couleur marron
  accent: "#F4E4C1",     // Couleur beige
}
```

### Prix

Les prix sont définis dans [components/OrderSection.tsx](components/OrderSection.tsx):

```typescript
const pricingOptions = [
  { id: 1, size: '250g', price: 12.99, oldPrice: 15.99, popular: false },
  { id: 2, size: '500g', price: 22.99, oldPrice: 28.99, popular: true },
  { id: 3, size: '1kg', price: 39.99, oldPrice: 49.99, popular: false }
];
```

## Fonctionnalités à implémenter pour la production

### Paiement
- Intégrer Stripe ou PayPal
- Ajouter la validation de carte bancaire
- Implémenter la confirmation de paiement

### Base de données
- Configurer PostgreSQL ou MongoDB
- Créer les modèles de données (Users, Orders, Products)
- Implémenter les migrations

### Authentification
- Ajouter NextAuth.js
- Créer les pages de connexion/inscription
- Gérer les sessions utilisateur

### Email
- Configurer SendGrid ou Mailgun
- Créer les templates d'emails (confirmation, tracking)
- Automatiser les notifications

### SEO
- Ajouter les meta tags
- Créer un sitemap.xml
- Optimiser les images
- Implémenter le Schema.org markup

## Déploiement

### Vercel

```bash
npm i -g vercel
vercel
```

### Docker

Créer un `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Construire et lancer:

```bash
docker build -t amlou-ecommerce .
docker run -p 3000:3000 amlou-ecommerce
```

## Support

Pour toute question ou problème, consultez la documentation Next.js: https://nextjs.org/docs
