class Dog {
  constructor(name) {
    this.name = name;
  }
};
  // 2 option2isthe corrcect One 
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

