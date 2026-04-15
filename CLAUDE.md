# Lenora Conciergerie — Mémoire projet

## Projet
Site vitrine multi-pages (13 HTML) pour conciergerie locative.
Cliente : Leslye Consel — lenora-conciergerie.fr
Branche active : `claude/code-review-GVMIm` → à merger dans `main` après validation Vercel

## Stack
- HTML/CSS/JS vanilla (pas de framework)
- Vercel : `vercel.json` avec `cleanUrls: true, trailingSlash: false`
- Formspree AJAX — `action="https://formspree.io/f/YOUR_FORM_ID"` à remplacer par l'ID réel

## Design system
- Titres : `Cormorant Garamond` (serif)
- Corps/UI : `DM Sans`
- `--forest: #283828` | `--copper: #B8865C` | `--copper-light: #D4A679`
- `--cream: #F9F5EE` | `--warm-white: #FDFAF5` | `--charcoal: #1C1C1A`
- `--mid: #6B6155` | `--light-text: #9C917F` | `--beige: #EDE5D8`

## Fichiers clés
- `styles.css` — CSS global (~850 lignes), tous les composants et breakpoints (1200/1024/768/480px)
- `script.js` — nav scroll, hamburger, form AJAX Formspree, IntersectionObserver reveal
- `images/leslye-portrait.jpg` — portrait circulaire (hero + about section de index.html)
- `images/logo-full.png` — logo complet fleur-de-lys (footer, 80px)
- `images/logo-text.png` — logo texte transparent (nav, 38px, filter CSS pour état sombre/clair)
- `images/logo-square.jpg` — favicon + apple-touch-icon

## Pages du site
| Page | URL | Rôle |
|---|---|---|
| `index.html` | / | Accueil (hero, about, services, process, zones, testimonials, tarifs, contact) |
| `contact.html` | /contact | Formulaire de contact |
| `services.html` | /services | Détail prestations |
| `methode.html` | /methode | Comment ça marche |
| `ain.html` | /ain | SEO local Ain |
| `nord-isere.html` | /nord-isere | SEO local Nord Isère |
| `est-lyonnais.html` | /est-lyonnais | SEO local Est Lyonnais |
| `blog-estimer-revenu-ain.html` | /blog-estimer-revenu-ain | Article blog |
| `blog-airbnb-vs-booking.html` | /blog-airbnb-vs-booking | Article blog |
| `blog-5-questions-conciergerie.html` | /blog-5-questions-conciergerie | Article blog |
| `mentions-legales.html` | /mentions-legales | Légal |
| `confidentialite.html` | /confidentialite | RGPD |
| `cgv.html` | /cgv | CGV |

## Contacts & identifiants de Leslye
- Téléphone : +33 6 74 39 87 41
- Instagram : https://www.instagram.com/lenora.conciergerie/
- Facebook : https://www.facebook.com/share/1AVm18bdvt/?mibextid=wwXIfr
- LinkedIn : https://www.linkedin.com/in/leslye-consel-7325a83b7
- WhatsApp : https://wa.me/33674398741 (bouton flottant `.whatsapp-float` sur toutes les pages)
- SIRET : 79348974100025

## Actions restantes côté Leslye (client)
1. Créer compte Formspree → coller l'ID dans `action="https://formspree.io/f/ID"` (toutes les pages avec formulaire)
2. Connecter le repo GitHub à Vercel, configurer domaine `lenora-conciergerie.fr`
3. Merger la branche `claude/code-review-GVMIm` → `main` après test Vercel
4. Ajouter images propriétés (hero, OG images)
