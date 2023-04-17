class Shape { 
    constructor (text, textColor, backgroundColor)
    this.text = text;
    this.textColor = textColor;
    this.backgroundColor = backgroundColor;
}


class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />`;

    }
}
class Square extends Shape {
   render(){
    return `<rect x="73" y="40" width="160" height="160" fill="${this.backgroundColor}" />`;
   }
} 
class Circle extends Shape {
    render(){
    return `<circle cx="150" cy="115" r="80" fill="${this.backgroundColor}" />`;
}
module.exports = {Triangle, Square, Circle};