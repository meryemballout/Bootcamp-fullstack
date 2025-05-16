import psycopg2
from config import Config  # Contient SQLALCHEMY_DATABASE_URI

from urllib.parse import urlparse

class UserTableManager:
    @staticmethod
    def create_table():
        create_table_query = '''
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                email VARCHAR(100) NOT NULL UNIQUE,
                password_hash VARCHAR(255) NOT NULL,
                full_name VARCHAR(100),
                role VARCHAR(50) DEFAULT 'user',
                is_active BOOLEAN DEFAULT TRUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        '''
        try:
            # Parse l'URI (postgresql://user:pass@host:port/dbname)
            uri = Config.SQLALCHEMY_DATABASE_URI
            result = urlparse(uri)

            conn = psycopg2.connect(
                dbname=result.path[1:],  # retire le / du début
                user=result.username,
                password=result.password,
                host=result.hostname,
                port=result.port
            )

            cur = conn.cursor()
            cur.execute(create_table_query)
            conn.commit()
            print("✅ Table 'users' created successfully (or already exists).")
        except Exception as e:
            print("❌ Error while creating 'users' table:", e)
        finally:
            if 'cur' in locals():
                cur.close()
            if 'conn' in locals():
                conn.close()

# Exécution directe
if __name__ == "__main__":
    UserTableManager.create_table()
