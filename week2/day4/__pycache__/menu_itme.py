
import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'admin'
DATABASE = 'Menu_Items'

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def run_query(self, query, values=None, is_result=False):
        result = 'Succesful run'
        try:
            connect = psycopg2.connect(
                host=HOSTNAME, 
                user=USERNAME, 
                password=PASSWORD, 
                dbname=DATABASE)
        except Exception as e:
            print(f"Error: {e}")
        
        cursor = connect.cursor()
        cursor.execute(query, values)
        connect.commit()
        if is_result:
            result = cursor.fetchall()
        connect.close()
        return result

    def save(self):
        save_item = f'''
                    INSERT INTO menu_items(item_name, item_price)
                    VALUES (%s, %s);
                    '''
        self.run_query(save_item, (self.name, self.price))

    def delete(self):
        delete_item = f'''DELETE FROM menu_items  WHERE item_name = %s;'''
        self.run_query(delete_item, (self.name,))
    
    def update(self, name, price):
        update_query = '''
                    UPDATE menu_items
                    SET item_name = %s, item_price = %s
                    WHERE item_name = %s;
                    '''
        self.run_query(update_query, (name, price, self.name))
        self.name = name
        self.price = price



if __name__ == "__main__":
    # For creating the table of Menu Items
    # create_table_ = f'''
    #             CREATE TABLE Menu_Items(
    #                 item_id SERIAL PRIMARY KEY,
    #                 item_name VARCHAR(30) NOT NULL,
    #                 item_price SMALLINT DEFAULT 0
    #             )
    #             '''
    
    item = MenuItem('Burger', 35)
    item.save()
    # item.delete()
    item.update('Veggie Burgy', 37)
