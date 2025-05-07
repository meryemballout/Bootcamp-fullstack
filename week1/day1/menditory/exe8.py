# Exercise 8 : Sandwich Orders
#sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"].

# The deli has run out of pastrami, use a while loop to remove all occurrences of Pastrami sandwich from sandwich_orders.
# We need to prepare the orders of the clients:

# Create an empty list called finished_sandwiches.

# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# Initial list of sandwich orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Step 1: Remove all "Pastrami sandwich" using a while loop
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# Step 2-4: Process the remaining orders
finished_sandwiches = []

# Remove sandwiches from sandwich_orders and add to finished_sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    
# Step 5: Print message for each sandwich made
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")