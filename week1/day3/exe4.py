#🌟 Exercise 4 : Afternoon at the Zoo
#Goal:
#Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.
#Key Python Topics:
#Classes and objects
#Object instantiation
#Methods
#Lists
#Dictionaries (for grouping)
#String manipulation
#Instructions
#Step 1: Define the Zoo Class
#1. Create a class called Zoo.
#2. Implement the __init__() method:
#It takes a string parameter zoo_name, representing the name of the zoo.
#Initialize an empty list called animals to keep track of animal names.
#3. Add a method add_animal(new_animal):
#This method adds a new animal to the animals list.
#Do not add the animal if it is already in the list.
#4. Add a method get_animals():
#This method prints all animals currently in the zoo.
#5. Add a method sell_animal(animal_sold):
#This method checks if a specified animal exists on the animals list and if so, remove from it.
#6. Add a method sort_animals():
#This method sorts the animals alphabetically.
#It also groups them by the first letter of their name.
#The result should be a dictionary where:
#Each key is a letter.
#Each value is a list of animals that start with that letter.
#Example output:
#  'B': ['Baboon', 'Bear'],
#   'C': ['Cat', 'Cougar'],
#   'G': ['Giraffe'],
#   'L': ['Lion'],
#   'Z': ['Zebra']
#7. Add a method get_groups():
#This method prints the grouped animals as created by sort_animals().
#Example output:
#B: ['Baboon', 'Bear']
#C: ['Cat', 'Cougar']
#G: ['Giraffe']
#...
#Step 2: Create a Zoo Object
#Create an instance of the Zoo class and pass a name for the zoo.
#Step 3: Call the Zoo Methods
#Use the methods of your Zoo object to test adding, selling, displaying, sorting, and grouping animals.
#Example (No Internal Logic Provided)
#class Zoo:
#    def __init__(self, zoo_name):
#        pass
#    def add_animal(self, new_animal):
#        pass
#    def get_animals(self):
#        pass
#    def sell_animal(self, animal_sold):
#        pass
#    def sort_animals(self):
#        pass
#    def get_groups(self):
#        pass
# Step 2: Create a Zoo instance
#ramat_gan_safari = Zoo("Ramat Gan Safari")
# Step 3: Use the Zoo methods
#ramat_gan_safari.add_animal("Giraffe")
#ramat_gan_safari.add_animal("Bear")
#ramat_gan_safari.add_animal("Baboon")
#ramat_gan_safari.get_animals()
#ramat_gan_safari.sell_animal("Bear")
#ramat_gan_safari.get_animals()
#ramat_gan_safari.sort_animals()
#ramat_gan_safari.get_groups()






























class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name         
        self.animals = []  
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    def get_animals(self):
        print("Animals in the zoo:", self.animals)
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    def sort_animals(self):
        self.animals.sort()
        self.groups = {}

        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.groups:
                self.groups[first_letter] = [animal]
            else:
                self.groups[first_letter].append(animal)
    def get_groups(self):
        for letter, group in self.groups.items():
            print(f"{letter}: {group}")        
ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()

ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()           