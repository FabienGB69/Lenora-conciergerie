# MemPalace — Palais Mental du Projet

Le Palais de Mémoire appliqué au projet : visualise le codebase comme des salles d'un palais, pour naviguer et retrouver n'importe quelle information instantanément.

## Concept
Chaque "salle" correspond à une zone du projet. Quand tu entres dans une salle, tu vois immédiatement tout ce qui s'y passe.

## Navigation demandée
$ARGUMENTS

Si aucun argument : génère la carte complète du palais.

---

## 🏛️ Le Palais Lenora Conciergerie

### 🚪 ENTRÉE — index.html
Le cœur du site. 8 sections : hero → about → services → process → zones → testimonials → tarifs → contact.
*Ce qui change ici se voit immédiatement par le visiteur.*

### 🗂️ AILE PAGES
- **Contact** (`contact.html`) — Formulaire Formspree, point de conversion principal
- **Services** (`services.html`) — Détail des prestations, SEO
- **Méthode** (`methode.html`) — Process, réassurance
- **Zones SEO** — `ain.html` / `nord-isere.html` / `est-lyonnais.html`

### 📰 AILE BLOG
3 articles : `blog-estimer-revenu-ain.html` · `blog-airbnb-vs-booking.html` · `blog-5-questions-conciergerie.html`
*Trafic longue traîne, mise à jour périodique recommandée.*

### ⚖️ AILE LÉGALE
`mentions-legales.html` · `confidentialite.html` · `cgv.html`
*Rarement modifiées. SIRET : 79348974100025*

### 🎨 ATELIER DESIGN (styles.css ~850 lignes)
- Fonts : Cormorant Garamond (titres) + DM Sans (corps)
- Palette : `--forest #283828` · `--copper #B8865C` · `--cream #F9F5EE`
- Breakpoints : 1200 → 1024 → 768 → 480px
- *Tout changement visuel passe par ici.*

### ⚙️ SALLE DES MACHINES (script.js)
- Nav scroll + hamburger menu
- Form AJAX Formspree
- IntersectionObserver (reveal animations)
- *Modifier avec précaution : impacte toutes les pages.*

### 🖼️ GALERIE (images/)
- `leslye-portrait.jpg` — hero + about
- `logo-full.png` — footer (80px)
- `logo-text.png` — nav (38px, filter CSS)
- `logo-square.jpg` — favicon + apple-touch-icon

### 🔧 SALLE SERVEUR (vercel.json)
`cleanUrls: true, trailingSlash: false`
*Ajouter headers de sécurité ici (CSP, HSTS) via Leo.*

### 📋 ARCHIVE (CLAUDE.md)
Mémoire projet complète : stack, design system, contacts Leslye, actions restantes.

---

## Utilisation

- `/mempalace` — Affiche la carte complète
- `/mempalace <salle>` — Zoome sur une salle spécifique et liste tout ce qu'elle contient
- `/mempalace find <concept>` — Trouve dans quelle salle se trouve un concept

La carte se met à jour via `/memoire` quand de nouvelles salles sont créées.
