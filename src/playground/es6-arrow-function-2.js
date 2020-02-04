//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
//this keyword - no longer bound. Still the same context of its parent in ES5.
console.log(add(55,1,1001));
const user = {
    name: 'Andrew',
    cities: ['Phil','New Yorl', 'Dublin'],
    printPlaceslived () {
        return  this.cities.map((city) => this.name + 'has lived in ' + this.cities);
        }
};
console.log(user.printPlaceslived());
const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((a) => a * this.multiplyBy);
    }

};
console.log(multiplier.multiply());