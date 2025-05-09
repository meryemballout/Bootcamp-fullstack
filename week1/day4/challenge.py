import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range.")
        self.current_idx = page_num - 1

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        return '\n'.join(self.get_visible_items())
    if _name_ == "_main_":
      items = [f"Item {i+1}" for i in range(25)]
    paginator = Pagination(items, page_size=10)

    print("=== Première page ===")
    print(paginator.first_page())

    print("\n=== Deuxième page ===")
    paginator.next_page()
    print(paginator)

    print("\n=== Dernière page ===")
    paginator.last_page()
    print(paginator)

    print("\n=== Page précédente ===")
    paginator.previous_page()
    print(paginator)

    print("\n=== Aller à la page 2 ===")
    paginator.go_to_page(2)
    print(paginator)

    print("\n=== Essayer une page invalide (page 0) ===")
    try:
        paginator.go_to_page(0)
    except ValueError as e:
        print(f"Erreur attrapée : {e}")

    print("\n=== Essayer une page invalide (page 100) ===")
    try:
        paginator.go_to_page(100)
    except ValueError as e:
        print(f"Erreur attrapée : {e}")