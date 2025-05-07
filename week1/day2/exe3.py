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
