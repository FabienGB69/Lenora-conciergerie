# Code Review — Revue de Code Projet Lenora

Revue de code ciblée et contextualisée pour le projet Lenora Conciergerie.

## Scope de la revue
$ARGUMENTS

Si aucun argument : revue des fichiers modifiés depuis `main` (via `git diff main`).

## Standards du projet à vérifier

### HTML
- [ ] Structure sémantique correcte (h1 unique, landmarks, listes)
- [ ] Attributs alt sur toutes les images
- [ ] Labels associés à chaque input
- [ ] Meta tags : title (55-60 chars), description (150-160 chars), OG
- [ ] Pas de contenu inline `style=""` sauf exception justifiée
- [ ] `lang="fr"` sur `<html>`

### CSS (styles.css)
- [ ] Variables CSS du design system utilisées (`--forest`, `--copper`, etc.)
- [ ] Pas de valeurs magiques (couleurs hardcodées, px sans variable)
- [ ] Breakpoints respectés : 1200 / 1024 / 768 / 480px
- [ ] Sélecteurs non trop spécifiques (max 3 niveaux)
- [ ] Pas de `!important` sauf si justifié

### JavaScript (script.js)
- [ ] Vanilla JS uniquement, pas de libs non déclarées
- [ ] Pas de `console.log` oubliés
- [ ] Event listeners nettoyés si nécessaire
- [ ] Gestion d'erreur sur fetch/AJAX Formspree
- [ ] Pas d'`innerHTML` avec données utilisateur non sanitisées

### Performance
- [ ] Images avec `loading="lazy"` (sauf above-the-fold)
- [ ] Pas de render-blocking inutile
- [ ] Fonts chargées via `display=swap`

### Sécurité
- [ ] Pas de données sensibles dans le JS (clés, mots de passe)
- [ ] Liens externes avec `rel="noopener noreferrer"`
- [ ] Formspree : honeypot anti-spam présent ?

## Format de sortie

```
## Résumé
Note globale : X/10
Points forts : ...
Points à corriger : ...

## Problèmes (par sévérité)
### Bloquant
### Important  
### Mineur

## Suggestions d'amélioration
```

Après le rapport, corrige automatiquement les problèmes **bloquants** et **importants**.
