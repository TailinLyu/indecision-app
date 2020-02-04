//Convention to make first letter of class UpperCase
class Person {
    constructor (name = 'Andrew', age = '26') {
        this.name = name ;
        this.age = age;
    }
    getGretting(){
        return `Hi I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}
class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
} 
class Traveler extends Person{
    constructor (name, age, location){
        super(name,age);
        this.location = location;
    }
    getGretting(){
        let gretting = super.getGretting();
        if(!!this.location){
            gretting += ` I'm visiting from ${this.location}`;
        }
        return gretting;
    }
}
const me = new Traveler('Tailin Lyu',3, 'New Yokr');
console.log(me.getGretting());

const other = new Traveler("ANDWAE ADS", 4);
console.log(other.getGretting());