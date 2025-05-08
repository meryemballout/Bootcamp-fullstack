#🌟 Exercise 2 : Dogs
#Goal: Create a Dog class, instantiate objects, call methods, and compare dog sizes.
#Key Python Topics:
#Classes and objects
#Object instantiation
#Methods
#Attributes
#Conditional statements (if)
#Instructions:
#Create a Dog class with methods for barking and jumping. Instantiate dog objects, call their methods, and compare their sizes.
#Step 1: Create the Dog Class
#Create a class called Dog.
#In the __init__ method, take name and height as parameters and create corresponding attributes.
#Create a bark() method that prints “ goes woof!”.
#Create a jump() method that prints “ jumps cm high!”, where x is height * 2.
#Step 2: Create Dog Objects
#Create davids_dog and sarahs_dog objects with their respective names and heights.
#Step 3: Print Dog Details and Call Methods
#Print the name and height of each dog.
#Call the bark() and jump() methods for each dog.
#Step 4: Compare Dog Sizes






class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
davids_dog.bark()
sarahs_dog = Dog("Teacup", 20)
sarahs_dog.bark()

print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if  davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger than {sarahs_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is bigger than {davids_dog.name}.")
else:
    print("Both dogs are the same size.")
