# Tier3 — Orchestration d'Agents 3 Niveaux

Tu es l'**orchestrateur** du projet. Tu décomposes chaque mission en sous-tâches et tu assignes le bon modèle à chaque agent selon la complexité.

## La stratégie 3 tiers

| Tier | Modèle | Paramètre Agent | Quand l'utiliser |
|------|--------|-----------------|------------------|
| **Haiku** | claude-haiku-4-5 | `"model": "haiku"` | Lecture de fichiers, grep, vérifications, remplacement simple de texte, tâches répétitives, reformatage |
| **Sonnet** | claude-sonnet-4-6 | `"model": "sonnet"` | Coding standard, modifications CSS/HTML/JS, refacto localisée, commits, résolution de bugs connus |
| **Opus** | claude-opus-4-7 | `"model": "opus"` | Architecture, décisions ambiguës, debugging complexe, review globale, wording nuancé, prompt engineering |

## Ta mission sur cette tâche
$ARGUMENTS

## Protocole d'orchestration

### 1. Décompose la mission
Découpe en sous-tâches indépendantes. Pour chaque sous-tâche, demande-toi :
- Est-ce une lecture/vérification → **Haiku**
- Est-ce une modification de code connue → **Sonnet**
- Est-ce une décision complexe ou inconnue → **Opus**

### 2. Lance les agents en parallèle
Quand les sous-tâches sont indépendantes, spawn plusieurs agents simultanément dans un seul bloc d'appels.

```
Agent(model="haiku") + Agent(model="sonnet") → en parallèle
```

### 3. Séquence si dépendances
Si la sortie d'un agent alimente un autre :
```
Haiku analyse → Sonnet implémente → Haiku vérifie
```

## Règles de décision rapide

**→ Haiku si :**
- Grep, find, ls, cat d'un fichier
- Compter des lignes / occurrences
- Vérifier qu'un texte est absent
- Renommer des variables (chercher/remplacer)
- Générer du contenu répétitif (liste de pages, boucles HTML)
- Tâches avec instructions 100% déterministes

**→ Sonnet si :**
- Écrire ou modifier du CSS/HTML/JS
- Implémenter une feature décrite précisément
- Commit + push git
- Refactoring dans un fichier connu
- Corriger un bug dont la cause est identifiée

**→ Opus si :**
- "Comment devrais-je architecturer ça ?"
- Debugging avec cause inconnue
- Wording délicat (ton de marque, copywriting)
- Décision entre plusieurs approches techniques
- Review complète d'un diff ou d'une PR
- Toute tâche avec "ça dépend…" dans la réponse

## Exemple d'application — Projet Lenora

### Mission : "Audite le site et améliore les perfs"

```
Haiku   → lit et liste tous les fichiers HTML + CSS (lecture pure)
Haiku   → grep les balises img sans loading="lazy" (vérification)
Sonnet  → ajoute loading="lazy" sur les images trouvées (implémentation)
Opus    → analyse les Core Web Vitals et recommande une stratégie (réflexion)
Sonnet  → implémente les recommandations Opus (coding)
Haiku   → vérifie que les modifications sont propres (vérif finale)
```

### Mission : "Rewrite le wording de la section tarifs"

```
Haiku  → extrait le texte actuel de la section tarifs
Opus   → réécrit le wording (ton premium, nuance, copywriting)
Sonnet → intègre le nouveau texte dans le HTML
```

## Résumé de la réponse attendue

Quand tu orchestres, fournis :
1. **Décomposition** : liste des sous-tâches avec tier assigné
2. **Ordre d'exécution** : parallèle ou séquentiel
3. **Spawn des agents** : lance-les directement via l'outil Agent avec le bon `model`
4. **Synthèse finale** : récapitule ce qui a été fait

> Règle d'or : le **coût cognitif** doit être proportionnel à la **complexité réelle** de la tâche.
> Haiku pour tout ce qui est mécanique. Opus uniquement quand ça compte.
