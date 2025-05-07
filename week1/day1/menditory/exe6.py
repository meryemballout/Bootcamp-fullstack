# Exercise 6: Tuple
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# On crée un tuple avec trois nombres
mon_tuple = (9, 8, 7)
print("Tuple d'origine :", mon_tuple)
try:
    print("\nJe tente d'ajouter un nombre avec 'add()'...")
    mon_tuple.add(6)
except AttributeError as erreur:
    print("Erreur :", erreur)
    print("Explication : Les tuples ne peuvent pas être modifiés. 'add()' ne fonctionne que sur les ensembles (set).")

nouvelles_valeurs = (4, 5)
print("\nNouveaux nombres à ajouter :", nouvelles_valeurs)

nouveau_tuple = mon_tuple + nouvelles_valeurs

print("\nNouveau tuple :", nouveau_tuple)
print("\nExplication : On ne change pas le tuple d'origine. On en crée un nouveau avec plus de valeurs.")

