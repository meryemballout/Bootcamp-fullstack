#Ask the user for a number and a length.
user_input = int(input("Please enter a number: "))
length_input = int(input("Please enter a length: "))
# Multiplier user_input par chaque élément de la séquence et ajouter à la liste
results = []
for i in range(1, length_input + 1):
    results.append(user_input * i)


print(results)


   