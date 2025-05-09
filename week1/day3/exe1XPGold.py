import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def geometrical_definition(self):
        print(f"A circle is a shape where all points are at a constant distance ({self.radius} units) from the center.")

circle = Circle(5)
print(f"Perimeter: {circle.perimeter()}")
print(f"Area: {circle.area()}")
circle.geometrical_definition()
