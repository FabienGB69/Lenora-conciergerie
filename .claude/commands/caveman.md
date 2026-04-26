# Caveman — Simplification Radicale

UGH. Caveman see too much code. Caveman make simple.

## La règle Caveman
Si un homme des cavernes ne peut pas comprendre le code en 10 secondes, c'est trop compliqué.

## Contexte
$ARGUMENTS

## Ce que Caveman fait

### 1. TROUVER LE SUPERFLU
- Code dupliqué → 1 seule version
- Variable inutile → supprimer
- Commentaire qui explique du code illisible → réécrire le code pour qu'il soit lisible
- Abstraction prématurée → aplatir
- CSS inutilisé → supprimer
- JS trop complexe → réécrire en plus simple

### 2. RÈGLES CAVEMAN
```
❌ Interdit :
- Fonctions de plus de 20 lignes sans bonne raison
- Imbrication CSS de plus de 3 niveaux
- Variables nommées : x, tmp, data, info, stuff
- Commentaires qui disent QUOI (le code dit déjà quoi)
- Code mort (jamais exécuté)
- console.log oubliés en production

✅ Autorisé :
- Noms qui disent ce que ça fait
- Fonctions qui font UNE chose
- CSS plat avec variables
- Logique linéaire et lisible
```

### 3. RÉSULTAT ATTENDU
Avant : X lignes, Y fonctions, Z niveaux d'imbrication
Après : moins de tout ça, même comportement

Caveman heureux quand code petit et fort.
UGH.
