from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)

# Connection to MongoDB cloud
# Connexion with monog db cloud 

app.config["MONGO_URI"] = "mongodb+srv://balloutmeryem:G7ozJdGKMEWcRAPB@cluster0.yfiugyn.mongodb.net/"

mongo = PyMongo(app)

# Route home
@app.route('/')
def home():
    return "Hello, Flask with MongoDB!"

# Route add data 
@app.route('/add', methods=['POST'])
def add_user():
    data = request.get_json()
    mongo.db.users.insert_one(data)
    return jsonify({"message": "User added"}), 201

# Route to show all data 
@app.route('/users', methods=['GET'])
def get_users():
    users = list(mongo.db.users.find({}, {'_id': 0}))
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)

try:
    mongo.cx.server_info()  # محاولة جلب معلومات السيرفر => تحقق من الاتصال
    print("MongoDB connection successful!")
except Exception as e:
    print("MongoDB connection error:", e)
