import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

    def generate_random_list(self):
        return [random.randint(0, 100) for _ in range(len(self.letters))]

mylist = MyList(['b', 'a', 'd', 'c'])

print(mylist.letters)
print(mylist.get_reversed())
print(mylist.get_sorted())
print(mylist.generate_random_list())