# Lenora-conciergerie

Refonte d'un site WordPress vers une architecture multi-pages sur-mesure, optimisée pour la performance, l'UX et le SEO local. Structuration des contenus, amélioration du maillage interne, optimisation des temps de chargement et intégration de mots-clés géolocalisés pour maximiser la visibilité et la conversion.

## Pages

| Fichier | Description |
|---|---|
| `index.html` | Accueil — hero, proposition de valeur, cards |
| `services.html` | Détail des 6 services proposés |
| `methode.html` | Processus en 4 étapes |
| `contact.html` | Formulaire de contact / demande d'estimation |

## Stack

- HTML5 sémantique, CSS3 (variables, clamp, grid), JS vanilla
- Fonts : Inter via Google Fonts (`display=swap`)
- Formulaire : [Formspree](https://formspree.io) (AJAX)
- Déploiement : Vercel (site statique)

## Configuration requise avant mise en ligne

### 1. Remplacer les placeholders `[Ville]` et `[votre-domaine]`

Dans tous les fichiers HTML, rechercher et remplacer :
- `[Ville]` → votre ville (ex : `Lyon`)
- `[Région]` → votre région (ex : `Auvergne-Rhône-Alpes`)
- `[Code Postal]` → votre code postal
- `[votre-domaine]` → votre domaine (ex : `lenora-conciergerie.fr`)
- `[+33XXXXXXXXX]` → votre numéro de téléphone
- `[contact@lenora-conciergerie.fr]` → votre adresse email
- `[Adresse]` → votre adresse postale

### 2. Configurer Formspree

Dans `contact.html`, remplacer `YOUR_FORM_ID` :
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```
→ Créer un compte sur [formspree.io](https://formspree.io) et copier votre ID de formulaire.

### 3. Image hero

Placer une image locale à `/images/hero-bg.jpg` (remplace le placeholder Unsplash).  
Recommandé : WebP 1920×1080px, < 200 Ko.

### 4. Favicon & Open Graph

- Ajouter `favicon.ico` et `apple-touch-icon.png` à la racine
- Ajouter les images OG (`/images/og-accueil.jpg`, `og-services.jpg`, etc.)  
  Recommandé : 1200×630px, < 100 Ko par image

### 5. Schema.org

Compléter le bloc JSON-LD dans `index.html` et `services.html` avec vos vraies coordonnées.

## Déploiement Vercel

### Option 1 — Dashboard Vercel
1. Importer le repository sur [vercel.com](https://vercel.com)
2. Framework Preset : **Other**
3. Build Command : laisser vide
4. Output Directory : `.`
5. Deploy

### Option 2 — CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

## Notes techniques

- `vercel.json` active les clean URLs (`/contact` au lieu de `/contact.html`)
- Le formulaire utilise AJAX (pas de redirection vers Formspree)
- Le message de succès s'affiche dans la page après envoi
- Honeypot anti-spam inclus dans le formulaire (`input[name="_gotcha"]`)
- `aria-expanded` sur le menu mobile, gestion de la touche Echap
