import {} from "./functions";
// class that is the project and tasks for the todo list can be added to it.

// use classes or a factory function to create each item that is added to
// the specific project todo list.
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value <= 0) {
      throw new Error("Width must be a positive number");
    }
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      throw new Error("Height must be a positive number");
    }
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }
}

const rect = new Rectangle(10, 20);

console.log(rect.area); // logs 200

rect.width = 15;
rect.height = 25;

console.log(rect.area); // logs 375
