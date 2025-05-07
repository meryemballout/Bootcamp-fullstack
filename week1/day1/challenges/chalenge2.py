texte = input("Entrez une chaîne de caractères : ")
resultat = ""

for caractere in texte:
    if caractere not in resultat:
        resultat += caractere

print("Caractères sans répétition :", resultat)