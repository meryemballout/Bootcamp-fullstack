from dotenv import load_dotenv
import os

load_dotenv("C:\\Users\\User\\Desktop\\Bootcamp-all-ex\\week2\\day5\\var.env")
 # charge les variables du fichier var.env

class Config:
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    DB_HOST = os.getenv("DB_HOST")
    DB_PORT = os.getenv("DB_PORT")

    SQLALCHEMY_DATABASE_URI = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

if __name__ == "__main__":
    print("Test de chargement des variables d'environnement :")
    print(f"DB_NAME     = {Config.DB_NAME}")
    print(f"DB_USER     = {Config.DB_USER}")
    print(f"DB_PASSWORD = {Config.DB_PASSWORD}")
    print(f"DB_HOST     = {Config.DB_HOST}")
    print(f"DB_PORT     = {Config.DB_PORT}")
    print()
    print("Chaîne de connexion SQLAlchemy construite :")
    print(Config.SQLALCHEMY_DATABASE_URI)
