# Claude-Mem — Gestionnaire de Mémoire Active

Système de mémoire structurée pour Claude : lit, écrit et interroge la mémoire projet à travers CLAUDE.md et des fichiers de mémoire dédiés.

## Usage
- `/claude-mem save <info>` — Sauvegarde une information en mémoire
- `/claude-mem recall <sujet>` — Rappelle tout ce qui est connu sur un sujet
- `/claude-mem status` — Affiche l'état complet de la mémoire projet
- `/claude-mem forget <sujet>` — Marque une information comme obsolète
- Sans argument : audit complet de la mémoire et suggestions de mise à jour

## Tâche demandée
$ARGUMENTS

## Architecture mémoire

```
CLAUDE.md                    ← mémoire principale (projet, stack, pages, contacts)
.claude/memory/
  ├── decisions.md           ← décisions techniques datées
  ├── bugs.md                ← bugs connus et leur statut
  ├── todo.md                ← tâches en cours / à faire
  └── sessions.md            ← résumés de sessions importantes
```

## Processus

### SAVE
1. Identifie la catégorie (décision / bug / todo / contexte général)
2. Ajoute l'entrée avec date ISO dans le bon fichier
3. Si c'est général → met à jour CLAUDE.md
4. Confirme ce qui a été sauvegardé

### RECALL
1. Cherche dans CLAUDE.md ET dans `.claude/memory/`
2. Compile toutes les entrées sur le sujet
3. Présente chronologiquement avec dates

### STATUS
1. Lit tous les fichiers mémoire
2. Résume : décisions prises, bugs ouverts, todos actifs, dernière session

## Règle d'or
La mémoire est inutile si elle n't pas à jour. Après chaque session significative, appelle `/claude-mem save` avec les apprentissages clés.
