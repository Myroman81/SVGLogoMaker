const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const setShape = require("./lib/shapes.js");

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please choose up to 3 characters to be displayed on your logo",
                name: "text",
            },
            {
                type: "input",
                message: "Please choose a color for your text.  (Color keyword or heixdecimal value)",
                name: "textColor",
            },
            {
                type: "list",
                message: "Please choose one of three shapes for your logo",
                name: "shapes",
                choices: ["Circle", "Square", "Triangle"]
            },
            {
                type: "input",
                message: "Please choose a color for your previously chosen shape.  (Color keyword or heixdecimal value)",
                name: "backgroundColor",
            },
        ])
        .then((response) => {
            if (response > 3) {
                console.log("Please enter a maximum of 3 characters");
            }
            else {
                    createLogo(response);
                }
            });}
           
            function setShape(response) {

                if (response.shape === "Circle") {
                    let userShape = new Circle (response.backgroundColor, response.text, response.textColor)
                    return userShape.render()
                }
            
                if (response.shape === "Square") {
                    let userShape = new Square (response.backgroundColor, response.text, response.textColor)
                    return userShape.render()
                }
            
                if (response.shape === "Triangle") {
                    let userShape = new Triangle (response.backgroundColor, response.text, response.textColor)
                    return userShape.render()
                }
            };