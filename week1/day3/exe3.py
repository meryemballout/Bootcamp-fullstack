#🌟 Exercise 3 : Who’s the song producer?
#Goal: Create a Song class to represent song lyrics and print them.
#Key Python Topics:
#Classes and objects
#Object instantiation
#Methods
#Lists
#Instructions:
#Create a Song class with a method to print song lyrics line by line.
#Step 1: Create the Song Class
#Create a class called Song.
#In the __init__ method, take lyrics (a list) as a parameter and create a corresponding attribute.
#Create a sing_me_a_song() method that prints each element of the lyrics list on a new line.
#Example:
#stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"]
#Got it! Here’s the cleaned-up version of Exercise 4: Afternoon at the Zoo, with clear instructions and examples, but without showing the solution code inside the class methods.



class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
    
stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()