import random
def random_number_game(user_number):
    random_number = random.randint(1, 100)
    if user_number ==  random_number :
        print("Success! The numbers are the same.")
    else:       
        print(f"Fail! The numbers are {user_number} and {random_number}.")
random_number_game(5)
