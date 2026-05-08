# Planning-with-Files — Planification Concrète par Fichiers

Transforme une intention vague en plan d'action concret, matérialisé dans des fichiers réels du projet.

## Principe
Un plan qui n'existe que dans le chat disparaît. Un plan dans un fichier persiste, peut être modifié, suivi et partagé.

## Tâche à planifier
$ARGUMENTS

## Processus

### 1. CADRAGE (2 min)
- Quel est l'objectif final mesurable ?
- Quelle est la deadline (si connue) ?
- Quels sont les contraintes et dépendances ?
- Qui fait quoi ? (Sam / Max / Nyx / Alex / Leo ou toi-même)

### 2. DÉCOMPOSITION
Découpe l'objectif en tâches :
- **Milestone** : étape majeure (1-2 semaines)
  - **Tâche** : unité de travail (1-4h)
    - **Sous-tâche** : action atomique (< 1h)

### 3. CRÉATION DES FICHIERS

**Fichier principal** : `.claude/plans/<nom-du-plan>.md`
```markdown
# Plan : <titre>
Date : YYYY-MM-DD
Objectif : ...
Deadline : ...

## Milestones
- [ ] M1 : ...
- [ ] M2 : ...

## Tâches détaillées
### M1 — <titre>
- [ ] T1.1 : ... (responsable: Sam | priorité: haute)
- [ ] T1.2 : ...
```

**Mise à jour CLAUDE.md** : ajoute une ligne dans la section appropriée pour référencer ce plan.

### 4. SUIVI
- Cases à cocher `[ ]` → `[x]` quand terminé
- Date de complétion à côté de chaque `[x]`
- Révision hebdomadaire recommandée

### 5. LIVRABLE
Crée le(s) fichier(s) de plan et confirme leur emplacement.

## Formats de plans disponibles
- **Sprint** : tâches sur 1 semaine, priorité P1/P2/P3
- **Roadmap** : vision sur 1-3 mois, milestones
- **Checklist** : liste simple pour une tâche spécifique
- **Brief** : contexte + objectif + critères de succès (pour déléguer à un agent)
