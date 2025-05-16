import requests 
import psycopg2
import random

# Paramètres de connexion à PostgreSQL pour la base de donnees
DB_PARAMS = {
    'dbname': 'countries',
    'user': 'postgres',
    'password': 'admin',  
    'host': 'localhost',
    'port': 5432
}

def setup_database():
    try:
        conn = psycopg2.connect(**DB_PARAMS)
        cursor = conn.cursor()

        cursor.execute('''
            CREATE TABLE IF NOT EXISTS countries (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                capital TEXT,
                flag TEXT,
                subregion TEXT,
                population INTEGER
            )
        ''')

        conn.commit()
        cursor.close()
        conn.close()
        print("✅ Table 'countries' ready.")
    except psycopg2.Error as e:
        print(f"❌ Database setup error: {e}")

def get_random_countries():
    url = 'https://restcountries.com/v3.1/all'

    try:
        response = requests.get(url)
        response.raise_for_status()
        countries = response.json()

        random_countries = random.sample(countries, 10)

        conn = psycopg2.connect(**DB_PARAMS)
        cursor = conn.cursor()

        for country in random_countries:
            name = country.get('name', {}).get('common', 'Unknown')
            capital = country.get('capital', ['Unknown'])[0] if country.get('capital') else 'Unknown'
            flag = country.get('flag', 'Unknown')
            subregion = country.get('subregion', 'Unknown')
            population = country.get('population', 0)

            cursor.execute('''
                INSERT INTO countries (name, capital, flag, subregion, population)
                VALUES (%s, %s, %s, %s, %s)
            ''', (name, capital, flag, subregion, population))

        conn.commit()
        print("✅ Successfully added 10 random countries to the database!")

        cursor.execute("SELECT * FROM countries")
        results = cursor.fetchall()
        for row in results:
            print(f"ID: {row[0]}, Name: {row[1]}, Capital: {row[2]}, Population: {row[5]}")

        cursor.close()
        conn.close()

    except requests.exceptions.RequestException as e:
        print(f"❌ Error fetching data from API: {e}")
    except psycopg2.Error as e:
        print(f"❌ PostgreSQL error: {e}")

if __name__ == "__main__":
    setup_database()
    get_random_countries()