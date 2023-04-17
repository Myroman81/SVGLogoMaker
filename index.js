const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

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
                name: "tectColor",
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
                name: "shapeBackgroundColor",
            },
        ])
        .then((response) => {
            if (response > 3) {
                console.log("Please enter a maximum of 3 characters");
            }
            else {
                    writeToFile("logo", response);
                }
            });}
            function writeToFile(fileName, response) {
                let svgString = "";
                string = '<svg version="1.1" width="300" height="200" xmlns= "http://www.w3.org/2000/svg">';
        
