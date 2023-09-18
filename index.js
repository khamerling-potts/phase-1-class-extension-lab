// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[0] + this.sides[2] > this.sides[1] &&
      this.sides[1] + this.sides[2] > this.sides[0]
    ) {
      return true;
    }
    return false;
  }
}
class Square extends Polygon {
  get isValid() {
    for (let i = 0; i < 3; i++) {
      if (this.sides[i] !== this.sides[i + 1]) {
        return false;
      }
    }
    return true;
  }
  get area() {
    return Math.pow(this.sides[0], 2);
  }
}
