class Shape {
    constructor() {
        this.color = 'black';  // Default color
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    render() {
        // This method will be overridden by child classes
        throw new Error('You have to implement the method render!');
    }
}

class Triangle extends Shape {
    render() {
        // Return the SVG string for triangle with the set color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        // Return the SVG string for circle with the set color
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        // Return the SVG string for square with the set color
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };
