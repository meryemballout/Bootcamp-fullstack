from pymongo import MongoClient

# Connect to local MongoDB server
client = MongoClient("mongodb://localhost:27017/")

# Select database
db = client['ecommerce']

# Select collection
products = db['products']

# Data (document) li bghiti tinserti
new_product = {
    "name": "Laptop HP Envy",
    "price": 900,
    "description": "Good for programming and gaming",
    "category": "electronics",
    "specifications": {
        "cpu": "Intel i7",
        "ram": "16GB",
        "storage": "1TB SSD"
    }
}

# Insert document
result = products.insert_one(new_product)

# Print the inserted document ID
print("Inserted product ID:", result.inserted_id)