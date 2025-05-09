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
    