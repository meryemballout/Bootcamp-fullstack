import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'admin'
DATABASE = 'Menu_Items'

class MenuManager():
    def __init__(self):
        pass

    @classmethod
    def all_items(self):
        query = f'''
                    SELECT * FROM menu_items;
                '''
        try:
            connect = psycopg2.connect(
                host=HOSTNAME, 
                user=USERNAME, 
                password=PASSWORD, 
                dbname=DATABASE)
        except Exception as e:
            print(f"Error: {e}")
        
        cursor = connect.cursor()
        cursor.execute(query)
        connect.commit()
        result = cursor.fetchall()
        connect.close()
        return result

    @classmethod
    def get_by_name(self, name):
        result = None
        query = f'''
                    SELECT * FROM menu_items
                    WHERE item_name = %s
                    LIMIT 1;
                '''
        val = (name,)
        try:
            connect = psycopg2.connect(
                host=HOSTNAME, 
                user=USERNAME, 
                password=PASSWORD, 
                dbname=DATABASE)
        except Exception as e:
            print(f"Error: {e}")
        
        cursor = connect.cursor()
        cursor.execute(query, val)
        connect.commit()
        result = cursor.fetchall()
        connect.close()
        if result:
            return result
        else:
            return None
        
    

if __name__ == "__main__":
    # item = MenuItem('Burger', 35)
    ##item.save()
    # item.delete()
    # item.update('Veggie Burger', 37)
    item2 = MenuManager.get_by_name('Beef Stew')
    items = MenuManager.all_items()
    item2 = MenuManager.get_by_name('Veggie Burgy')
    print(item2)
    print(MenuManager.all_items())
    
