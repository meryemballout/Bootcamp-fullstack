#exercie 1
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

#EXERCICE 2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
    
    # exercice 3

import random
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        power_self = self.run_speed() * self.weight
        power_other = other_dog.run_speed() * other_dog.weight
        if power_self > power_other:
            return f"{self.name} wins"
        else:
            return f"{other_dog.name} wins"
        import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")
dog1 = PetDog("Luna", 2, 15)
dog2 = PetDog("Bella", 3, 18)
dog3 = PetDog("Milo", 4, 20)

dog1.train()         
dog1.play(dog2, dog3) 
dog1.do_a_trick()      
    
    #exercice 4
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
    
    def is_18(self):
        return self.age >= 18
    

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name: 
                if person.is_18():
                    print(f"{first_name} is over 18, your parents Jane and John accept that you will go out with your friends.")
                else:   
                    print(f"Sorry, {first_name}, you are not allowed to go out with your friends.")
                return
        print("Person not found.")

family = Family("Smith")
family.born("Alice", 17)
family.born("Bob", 20)
family.check_majority("Alice") 
family.check_majority("Bob")  
family.check_majority("Charlie")  

