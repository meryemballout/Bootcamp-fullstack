from menu_itme import MenuItem   
from menu_manager import MenuManager   

def show_user_menu():
    while (1):
        print("\n----- Menu Editor -----")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")
        print("(E) Exit")
        
        choice = input("Enter your choice: ").upper()
        
        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("Exiting program. Final menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")

def view_item():
    name = input("Enter the name of the item you want to view: ")
    item = MenuManager.get_by_name(name)
    
    if item:
        print("----- Item Details -----")
        print(f"ID: {item[0][0]}")
        print(f"Name: {item[0][1]}")
        print(f"Price: {item[0][2]}$")
    else:
        print(f"Item '{name}' not found in the menu.")

def add_item_to_menu():
    name = input("Enter the name of the new item: ")
    
    existing_item = MenuManager.get_by_name(name)
    if existing_item:
        print(f"Item '{name}' already exists in the menu.")
        return
    
    try:
        price = int(input("Enter the price of the new item: "))
        if price < 0:
            print("Price cannot be negative.")
            return
    except ValueError:
        print("Invalid price. Please enter a number.")
        return
    
    new_item = MenuItem(name, price)
    new_item.save()
    print(f"Item '{name}' was added successfully.")

def remove_item_from_menu():
    name = input("Enter the name of the item you want to remove: ")
    
    existing_item = MenuManager.get_by_name(name)
    if not existing_item:
        print(f"Error: Item '{name}' not found in the menu.")
        return
    
    item_to_delete = MenuItem(name, existing_item[0][2])
    item_to_delete.delete()
    print(f"Item '{name}' was deleted successfully.")

def update_item_from_menu():
    name = input("Enter the name of the item you want to update: ")
    
    existing_item = MenuManager.get_by_name(name)
    if not existing_item:
        print(f"Error: Item '{name}' not found in the menu.")
        return
    
    new_name = input("Enter the new name for the item: ")
    try:
        new_price = int(input("Enter the new price for the item: "))
        if new_price < 0:
            print("Price cannot be negative.")
            return
    except ValueError:
        print("Invalid price. Please enter a number.")
        return
    
    item_to_update = MenuItem(name, existing_item[0][2])
    item_to_update.update(new_name, new_price)
    print(f"Item '{name}' was updated successfully to '{new_name}' with price {new_price} $.")

def show_restaurant_menu():
    
    items = MenuManager.all_items()
    
    if not items:
        print("The restaurant menu is empty.")
        return
    
    print("------ Restaurant Menu ------")
    
    for item in items:
        item_id, name, price = item
        print(f" name:{name}  price: {price}$")

if __name__ == "__main__":
  show_user_menu()
  