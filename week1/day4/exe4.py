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