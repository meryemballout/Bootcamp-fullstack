#🌟 Exercise 3: Zara
#Here is some information about a brand :
#name: Zara 
#creation_date: 1975 
#creator_name: Amancio Ortega Gaona 
#type_of_clothes: men, women, children, home 
#international_competitors: Gap, H&M, Benetton 
#number_stores: 7000 
#major_color: 
#France: blue, 
#Spain: red, 
#US: pink, green
#1. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
#The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
#2. Change the number of stores to 2.
#3. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
#4. Add a key called country_creation with a value of Spain.
#5. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
#6. Delete the information about the date of creation.
#7. Print the last international competitor.
#8. Print the major clothes colors in the US.
#9. Print the amount of key value pairs (ie. length of the dictionary).
#10. Print the keys of the dictionary.
#11. Create another dictionary called more_on_zara with the following details:
#- creation_date: 1975
#- number_stores: 10 000
#12. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
#13. Print the value of the key number_stores. What just happened ?





brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": "pink, green"
    }
}

brand["number_stores"] = 2

print(f"Les clients de Zara sont : {', '.join(brand['type_of_clothes'])}")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(f"Le dernier concurrent est : {brand['international_competitors'][-1]}")

print(f"Les couleurs principales aux États-Unis sont : {brand['major_color']['US']}")

print(f"Le nombre d'éléments dans le dictionnaire est : {len(brand)}")

print(f"Les clés du dictionnaire sont : {', '.join(brand.keys())}")

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print(f"Le nombre de magasins est maintenant : {brand['number_stores']}")
