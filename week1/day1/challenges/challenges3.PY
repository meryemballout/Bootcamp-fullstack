
birthdate = input("Please enter your birthdate (DD/MM/YYYY): ")


from datetime import datetime
birthdate = datetime.strptime(birthdate, "%d/%m/%Y")


current_date = datetime.now()


age = current_date.year - birthdate.year


if (current_date.month, current_date.day) < (birthdate.month, birthdate.day):
    age -= 1


candles = age % 10
padding =  ( 11 - candles ) // 2

cake = """      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""



print("       " + "_" * padding +"i" * candles + "_" * padding)
print(cake)