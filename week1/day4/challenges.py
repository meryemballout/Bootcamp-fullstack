class Ferme:
    def __init__(self, nom_ferme):
        self.nom = nom_ferme
        self.animaux = {}

    def ajouter_animal(self, type_animal, nombre=1):
        if type_animal in self.animaux:
            self.animaux[type_animal] += nombre
        else:
            self.animaux[type_animal] = nombre

    def afficher_infos(self):
        texte = f"Ferme de {self.nom}\n\n"
        for animal, nombre in self.animaux.items():
            texte += f"{animal} : {nombre}\n"
        texte += "\n    E-I-E-I-O !"
        return texte

    def types_animaux(self):
        return sorted(self.animaux.keys())

    def infos_courtes(self):
        liste_types = self.types_animaux()
        liste_animaux = []
        for animal in liste_types:
            if self.animaux[animal] > 1:
                liste_animaux.append(animal + "s")
            else:
                liste_animaux.append(animal)
        if len(liste_animaux) > 1:
            phrase = ", ".join(liste_animaux[:-1]) + " et " + liste_animaux[-1]
        else:
            phrase = liste_animaux[0]
        return f"La ferme de {self.nom} a {phrase}."


ferme = Ferme("McDonald")
ferme.ajouter_animal('vache', 5)
ferme.ajouter_animal('mouton')
ferme.ajouter_animal('mouton')
ferme.ajouter_animal('chèvre', 12)

print(ferme.afficher_infos())
print()
print(ferme.infos_courtes())