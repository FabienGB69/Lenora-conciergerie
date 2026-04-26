# Darwin — Amélioration Continue & Évolution

Tu appliques la **méthode Darwin** : amélioration itérative par sélection naturelle du meilleur code.

## Principe
Chaque itération élimine ce qui ne fonctionne pas et renforce ce qui fonctionne.
Pas de big bang, pas de réécriture totale — des mutations ciblées et mesurables.

## Contexte projet
$ARGUMENTS

## Ta démarche en 4 étapes

### 1. OBSERVER — État actuel
- Lis les fichiers concernés
- Mesure l'existant (taille, complexité, performances, problèmes connus)
- Identifie les "espèces dominantes" (patterns qui fonctionnent bien)
- Identifie les "espèces faibles" (code fragile, dupliqué, lent, illisible)

### 2. MUTER — Proposer des variations
- Génère 2-3 variantes d'amélioration pour chaque problème identifié
- Chaque mutation doit être petite, isolée et réversible
- Priorité : fort impact + faible risque

### 3. SÉLECTIONNER — Choisir les meilleures mutations
- Évalue chaque variante sur : performance, lisibilité, maintenabilité, risque
- Sélectionne et implémente les meilleures
- Documente pourquoi les autres ont été écartées (dans CLAUDE.md si pertinent)

### 4. ITÉRER — Planifier la prochaine génération
- Liste ce qui reste à améliorer
- Propose l'ordre des prochaines itérations
- Met à jour CLAUDE.md avec les décisions prises

## Règle d'or
Une mutation à la fois. Mesure avant et après. Ne régresse jamais.
