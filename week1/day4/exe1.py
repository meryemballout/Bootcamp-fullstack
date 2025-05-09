class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sound):
        return f'{sound}'

class Chartreux(Cat):
    def sing(self, sound):
        return f'{sound}'

class Siamese(Cat):
    def sing(self, sound):
        return f'{sound}'

bengal_cat = Bengal("mimi", 3)
chartreux_cat = Chartreux("Luna", 5)
siamese_cat = Siamese("lucia", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)

sara_pets.walk()

