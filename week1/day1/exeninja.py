#3 <= 3 < 9  
True
#3 == 3 == 3
True
#bool(0)
False
#bool(5 == "5")
False
# bool(4 == 4) == bool("4" == "4")
True
# bool(bool(None))
False
#x = (1 == True)       #  True 
y = (1 == False)       #False
a = True + 4          # True = 1 → 1 + 4 = 5
b = False + 10        # False = 0 → 0 + 10 = 10

print("x is", x)      # x is True
print("y is", y)      # y is False
print("a:", a)        # a: 5
print("b:", b)        # b: 10
 
#exe2
longest_sentence = ""

while True:
    sentence = input("Enter the longest sentence you can without using the letter 'A': ")

    if 'a' in sentence.lower():
        print("Oops! Your sentence contains the letter 'A'. Try again.")
        continue

    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("🎉 Congratulations! You've set a new record!")
        print(f"Length: {len(sentence)} characters")
    else:
        print("Nice try, but not longer than the current record.")
#exe3
