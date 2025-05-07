#exercise 3 : What’s your name ?
#Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.
my_name = "meryem"
user_name = input("What is your name? ")
if user_name == my_name:
    print("Hey, name twin! Are we secretly the same person living in parallel universes? ")
else:
    print("Nice to meet you, " + user_name + "!")


