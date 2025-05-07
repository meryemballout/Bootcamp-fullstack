#🌟 Exercise 2 : Cinemax #2
#A movie theater charges different ticket prices depending on a person’s age.
#if a person is under the age of 3, the ticket is free.
#if they are between 3 and 12, the ticket is $10.
#if they are over the age of 12, the ticket is $15.
#Given the following object:
#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#How much does each family member have to pay ?
#Print out the family’s total cost for the movies.
#Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).




family = {"rick": 43, "beth": 13 , "morty": 5 , "summer": 8}
total_cost = 0
for person , age in family.items():
    if age  < 3:
        price = 0
        print(f"this person {person} has to pay : {price}$")
        total_cost += price
    elif age <= 12:
        price = 10
        print(f"this person {person} has to pay : {price}$")
        total_cost += price
    else: 
        price =15
        print(f"this person {person} has to pay : {price}$")
        total_cost += price


   
print(f"\nLe coût total pour la famille est: ${total_cost}")
