//1.

class Square {
  constructor(side) {
    this.side = side;
    this.perimeter = side * 4;
    this.area = side ** 2;
    this.diagonal = Math.sqrt(2) * side;
  }
  describe() {
    return `Square with side ${this.side} has perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal}.`
  }
}

const square1 = new Square(1);
console.log(square1.describe());

const square2 = new Square(2);
console.log(square2.describe());

const square3 = new Square(100);
console.log(square3.describe());
