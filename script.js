let Circle = function (radius) {
    this.radius = radius;

    this.getRadius = function () {
        return radius;
    }

    this.getArea = function () {
        return radius * radius * Math.PI;
    }

};

let circle = new Circle(5);
let radius = circle.getRadius();
let area = circle.getArea();

alert("Area = " + area);