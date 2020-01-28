// object constructor
function Person1(name, hairColor) {
    this.name = name;
    this.hairColor = hairColor;
}
Person1.prototype.hi = function () {
    console.log('Hi from prototype, my name is ' + this.name + '.');
}
let kate = new Person1('kate', 'blue');
// kate.hi();
export {kate};