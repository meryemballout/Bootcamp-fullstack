#🌟Exercise 1 : Convert lists into dictionaries
#Convert the two following lists, into dictionaries.
#Hint: Use the zip method
#keys = ['Ten', 'Twenty', 'Thirty']
#values = [10, 20, 30]
#Expected output:
#{'Ten': 10, 'Twenty': 20, 'Thirty': 30}


key = ['ten', 'twenty', 'thirty']
values = [10, 20, 30]
resultats = dict(zip(key , values))
print (resultats)
