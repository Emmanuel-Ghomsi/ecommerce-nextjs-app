# Application E-commerce

## Description

Cette application e-commerce a été développée en utilisant Next.js pour l'intégration web. Elle permet aux utilisateurs de consulter et d'ajouter des produits au panier via une interface utilisateur fluide et moderne.

## Fonctionnalités

- Page d’accueil
- Affichage des produits de la catégorie (TOP) dans un slider
- Affichage des catégories disponibles
- Mise en valeur des produits de la catégorie _laptops_
- Consultation des produits par catégorie
- Consultation de la page d’un produit
- Ajout de produits dans un panier
- Consultation du panier en cours
- Enregistrement d'un panier
- Connexion/Inscription
- Consultation des paniers d’un utilisateur

## API

L'API utilisée pour ce projet est disponible à [dummyjson.com/docs](https://dummyjson.com/docs). Elle fournit toutes les données nécessaires pour les produits, les catégories et les utilisateurs.

## Technologies Utilisées

### Frontend Web

- **Next.js** : Framework React pour le rendu côté serveur et la génération statique.
- **Tailwind CSS** : Framework CSS utilitaire pour un design rapide et réactif.
- **Shadcn UI** : Composants UI pour une intégration facile et esthétique. [Documentation](https://ui.shadcn.com/docs/components/)
- **Lucide React** : Icônes modernes et réactives. [Documentation](https://lucide.dev/guide/packages/lucide-react)
- **React Query** : Gestion des états serveur pour des requêtes performantes et synchronisées. [Documentation](https://tanstack.com/query/latest/docs/framework/react/guides/queries)
- **Zod** : Validation de schémas TypeScript. [Documentation](https://zod.dev/)
- **Isomorphic DOMPurify** : Nettoyage du HTML pour prévenir les attaques XSS. [Documentation](https://www.npmjs.com/package/isomorphic-dompurify)
- **Zustand** : Gestion des états réactive et intuitive. [Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- **ESLint Plugin TailwindCSS** : Pour linting et une meilleure organisation des classes Tailwind. [Documentation](https://www.npmjs.com/package/eslint-plugin-tailwindcss)
- **UI Avatars** : Génération d'avatars pour les utilisateurs. [Documentation](https://ui-avatars.com/)

## Choix des Technologies

### Next.js

Next.js a été choisi pour sa capacité à rendre les pages côté serveur, ce qui améliore les performances et le SEO. Sa compatibilité avec React et ses fonctionnalités intégrées comme les API routes et l'optimisation des images en font un choix idéal pour une application e-commerce.

### Tailwind CSS

Tailwind CSS a été utilisé pour son approche utilitaire qui permet de créer des interfaces utilisateur rapidement tout en gardant un code CSS propre et maintenable.

### Shadcn UI

Shadcn UI fournit des composants prêts à l'emploi qui respectent les standards modernes de design, ce qui accélère le développement tout en garantissant une expérience utilisateur de qualité.

### Lucide React

Lucide React a été choisi pour ses icônes réactives et esthétiques, qui améliorent l'expérience utilisateur.

### React Query

React Query simplifie la gestion des requêtes et des états serveur, assurant des données toujours à jour et une manipulation asynchrone simplifiée.

### Zod

Zod permet de valider les schémas de données de manière simple et efficace, garantissant que les données utilisées dans l'application sont toujours conformes aux attentes.

### Isomorphic DOMPurify

Pour sécuriser l'application contre les attaques XSS, Isomorphic DOMPurify est utilisé pour nettoyer tout contenu HTML entrant.

### Zustand

Zustand offre une gestion des états intuitive et légère, idéale pour les applications de petite à moyenne taille comme celle-ci.

### ESLint Plugin TailwindCSS

Ce plugin améliore la productivité en assurant que les classes Tailwind sont utilisées de manière optimale et sans erreurs.

## Installation et Lancement du Projet

### Prérequis

- Node.js
- npm ou yarn

### Installation

1. Clonez le dépôt GitHub :
   ```bash
   git clone https://github.com/Emmanuel-Ghomsi/ecommerce-nextjs-app.git
   ```

2. Installez les dépendances pour le projet :
   ```bash
   cd ecommerce-next-app
   npm install
   # ou
   yarn install
   ```

### Lancer le Projet

1. Démarrez le serveur de développement Next.js :
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

2. Ouvrez votre navigateur et allez à http://localhost:3000