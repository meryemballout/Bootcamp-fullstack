import psycopg2
from config import Config
import bcrypt

class User:
    @staticmethod
    def get_connection():
        return psycopg2.connect(Config.SQLALCHEMY_DATABASE_URI)

    def __init__(self, username, email, password_hash, full_name=None, role='user', is_active=True):
        self.username = username
        self.email = email
        self.password_hash = password_hash
        self.full_name = full_name
        self.role = role
        self.is_active = is_active

    def save(self):
        
        conn = None
        cur = None
        try:
            hashed_password = bcrypt.hashpw(self.password_hash.encode('utf-8'), bcrypt.gensalt())
            conn = User.get_connection()
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO users (username, email, password_hash, full_name, role, is_active)
                VALUES (%s, %s, %s, %s, %s, %s)
            """, (self.username, self.email, hashed_password.decode('utf-8'), self.full_name, self.role, self.is_active))
            conn.commit()
            print(f"✅ User '{self.username}' added successfully.")
        except Exception as e:
            print("❌ Error while saving user:", e)
        finally:
            if cur:
                cur.close()
            if conn:
                conn.close()

    def delete(self):
        conn = None
        cur = None
        try:
            conn = User.get_connection()
            cur = conn.cursor()
            cur.execute("DELETE FROM users WHERE username = %s", (self.username,))
            if cur.rowcount:
                print(f"✅ User '{self.username}' deleted.")
            else:
                print("⚠️ User not found.")
            conn.commit()
        except Exception as e:
            print("❌ Error while deleting user:", e)
        finally:
            if cur:
                cur.close()
            if conn:
                conn.close()

    def update(self, **kwargs):
        conn = None
        cur = None
        updates = []
        values = []
        for key, value in kwargs.items():
            updates.append(f"{key} = %s")
            values.append(value)
        values.append(self.username)
        update_query = f"UPDATE users SET {', '.join(updates)}, updated_at = CURRENT_TIMESTAMP WHERE username = %s"
        try:
            conn = User.get_connection()
            cur = conn.cursor()
            cur.execute(update_query, values)
            if cur.rowcount:
                print(f"✅ User '{self.username}' updated.")
            else:
                print("⚠️ User not found.")
            conn.commit()
        except Exception as e:
            print("❌ Error while updating user:", e)
        finally:
            if cur:
                cur.close()
            if conn:
                conn.close()

    @classmethod
    def get_by_username(cls, username):
        conn = None
        cur = None
        try:
            conn = cls.get_connection()
            cur = conn.cursor()
            cur.execute("SELECT * FROM users WHERE username = %s", (username,))
            row = cur.fetchone()
            if row:
                # row structure: (id, username, email, password_hash, full_name, role, is_active, ...)
                return cls(row[1], row[2], row[3], full_name=row[4], role=row[5], is_active=row[6])
            return None
        except Exception as e:
            print("❌ Error while fetching user:", e)
        finally:
            if cur:
                cur.close()
            if conn:
                conn.close()

    @classmethod
    def all(cls):
        conn = None
        cur = None
        try:
            conn = cls.get_connection()
            cur = conn.cursor()
            cur.execute("SELECT * FROM users")
            rows = cur.fetchall()
            return [cls(row[1], row[2], row[3], full_name=row[4], role=row[5], is_active=row[6]) for row in rows]
        except Exception as e:
            print("❌ Error while fetching users:", e)
            return []
        finally:
            if cur:
                cur.close()
            if conn:
                conn.close()
