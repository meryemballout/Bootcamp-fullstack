# Exercise 5 : Favorite Numbers
# 1. Create a set called my_fav_numbers with all your favorites numbers.

my_fav_numbers = {2,8,21,1,5,9}
# Remove the last number.
my_fav_numbers.remove(9)
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
friend_fav_numbers = {1,7,5,4}
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)



