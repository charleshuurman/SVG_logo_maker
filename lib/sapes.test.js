const { Triangle, Circle, Square } = require('./shapes');

test('Triangle should render correct SVG with color', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle should render correct SVG with color', () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="90" fill="red" />');
});

test('Square should render correct SVG with color', () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
});
