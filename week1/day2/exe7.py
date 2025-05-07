#🌟 Exercise 7 : Temperature Advice
#Instructions
#Create a function called get_random_temp().
#This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
#Test your function to make sure it generates expected results.

#Create a function called main().
#Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
#Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

#Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
#below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
#between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
#between 16 and 23
#between 24 and 32
#between 32 and 40

#Change the get_random_temp() function:
#Add a parameter to the function, named ‘season’.
#Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
#Now that we’ve changed get_random_temp(), let’s change the main() function:
#Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
#Use the season as an argument when calling get_random_temp().

#Bonus: Give the temperature as a floating-point number instead of an integer.
#Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.





import random

def get_random_temp(saison):
    if saison == "hiver":
        return random.randint(-10, 16)
    elif saison == "printemps":
        return random.randint(10, 22)
    elif saison == "été":
        return random.randint(24, 40)
    elif saison == "automne":
        return random.randint(10, 20)
    else:
        return random.randint(-10, 40)

def main():
    saison = input("Entrez une saison (hiver, printemps, été, automne) : ")
    temperature = get_random_temp(saison)
    print("La température actuelle est de", temperature, "degrés Celsius.")

    if temperature < 0:
        print("Brrr, it’s very cold! .")
    elif temperature >= 0 and temperature <= 16:
        print("It's a bit chilly. Don't forget your coat..")
    elif temperature >= 17 and temperature <= 23:
        print("The weather is mild. You can go out with a light jacket..")
    elif temperature >= 24 and temperature <= 32:
        print("It's hot. Drink plenty of water.")
    elif temperature >= 33 and temperature <= 40:
        print("It's really hot! Stay cool and drink water.")

main()