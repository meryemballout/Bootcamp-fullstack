import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius:
            self.radius = radius
        elif diameter:
            self.radius = diameter / 2
        else:
            raise ValueError("Give radius or diameter")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle: radius={self.radius}, diameter={self.diameter}, area={self.area:.2f}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius


c1 = Circle(radius=3)
c2 = Circle(diameter=10)
print(c1)
print(c2)

c3 = c1 + c2
print(c3)

print(c1 > c2)
print(c1 == c2)

circles = [c1, c2, c3]
circles.sort()
for c in circles:
    print(c)