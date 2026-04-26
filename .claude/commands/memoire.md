# Mémoire Persistante — Mise à jour CLAUDE.md

Ce skill met à jour la mémoire projet dans `CLAUDE.md` pour conserver les décisions, l'état d'avancement et les informations importantes entre les sessions.

## Usage
`/memoire <ce qu'il faut mémoriser>`

Si aucun argument : fait un bilan complet de la session en cours et propose les mises à jour.

## Ce qui doit être mémorisé
$ARGUMENTS

## Processus

### 1. LIS d'abord CLAUDE.md
Comprends la structure existante avant de modifier.

### 2. IDENTIFIE ce qui change
- Nouvelles décisions techniques prises
- Tâches terminées (à cocher ou déplacer)
- Nouveaux fichiers/composants créés
- Bugs découverts ou corrigés
- Informations client mises à jour
- Dépendances ajoutées
- Configuration modifiée

### 3. MET À JOUR CLAUDE.md de façon minimale et précise
- Ajoute une section `## Décisions récentes` si absente
- Met à jour les sections existantes concernées
- N'efface jamais d'informations utiles
- Format : date ISO + description courte

### 4. RÉSUME les changements effectués

## Format pour les décisions
```markdown
## Décisions & historique
| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-04-26 | Exemple décision | Raison |
```

## Rappel
CLAUDE.md est la mémoire long terme du projet. Une session sans `/memoire` est une session dont les apprentissages sont perdus.
