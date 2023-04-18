const {Circle, Square, Triangle} = require("./shapes.js");

describe("Circle Test", () => {
    it("should be circle with a yellow background color, green text, and read 'MYR'", () => {
        let shape = new Circle("yellow", "MYR", "green");
        //const backgroundColor = "yellow";
        //const textColor = "green";
        //const text = "MYR";
        shape = shape.render();
        expect(shape).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="yellow" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="green">MYR</text>
    </svg>`);
    });
});

describe("Square Test", () => {
    it("should be a square with a blue background color, orange text, and read 'MYR'", () => {
        let shape = new Square("blue","MYR", "orange");
        //const backgroundColor = "blue";
        //const textColor = "orange";
        //const text = "MYR";
        shape = shape.render();
        expect(shape).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="blue"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="orange">MYR</text>
    </svg>`);
    });
});

describe("Triangle Test", () => {
    it("should be a triangle with a red background color, black text, and read 'MYR'", () => {
        let shape = new Triangle("red", "MYR", "black");
        //const backgroundColor = "red";
        //const textColor = "black"
        //const text = "MYR"
        shape = shape.render();
        expect(shape).toBe(`<svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="red"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="black">MYR</text>
    </svg>`);
    });
});