# Save Tokens — Économie de Contexte

Réduit la consommation de tokens : compresse le contexte, élimine le superflu et optimise la fenêtre de conversation.

## Quand utiliser
- Fenêtre de contexte > 50% utilisée
- Conversation longue avec beaucoup de code lu
- Avant une tâche complexe qui va nécessiter beaucoup de contexte
- Quand les réponses deviennent lentes ou tronquées

## Actions (dans l'ordre)
$ARGUMENTS

### 1. COMPRESSER le contexte actuel
Lance `/compact` — résume et compresse la conversation en préservant les informations essentielles.

### 2. NETTOYER les lectures inutiles
- Évite de relire des fichiers déjà connus
- Utilise `grep` ciblé plutôt que de lire des fichiers entiers
- Préfère les recherches par ligne plutôt que par fichier complet

### 3. RÉSUMER l'état actuel (pour CLAUDE.md)
Écris un résumé bref de :
- Ce qui a été fait dans cette session
- L'état des fichiers modifiés
- Les tâches restantes
Sauvegarde via `/claude-mem save <résumé>`

### 4. STRATÉGIE pour la suite
- Fragmenter les prochaines tâches en appels plus courts
- Utiliser des sous-agents pour les tâches lourdes (ils ont leur propre contexte)
- Éviter de lire `styles.css` en entier — utiliser `grep -n`

## Règles d'économie en cours de session
```
✅ grep -n "keyword" fichier.css        (ciblé)
✅ Read fichier.html offset=100 limit=50  (partiel)
✅ Sous-agent pour tâches > 5 fichiers
✅ /compact dès que contexte > 60%

❌ Read styles.css (850 lignes entières)
❌ Lire 13 fichiers HTML en séquence dans le contexte principal
❌ Garder de longs résultats de grep dans le contexte
```

## Estimation rapide
Si le contexte est plein à X% :
- < 40% : continuer normalement
- 40-60% : commencer à utiliser grep ciblé
- 60-80% : lancer /compact maintenant
- > 80% : URGENT — /compact + réduire les lectures
