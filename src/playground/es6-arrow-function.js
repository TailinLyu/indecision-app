function square(x){
    return x * x;
};
console.log(square(4));
// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;
//Arrow functions does not need return arguments anymore.
console.log(squareArrow(9));

//Challenge get first name;
const getfirst = (x) => x.split(' ')[0];
console.log(getfirst('Tailin Lyu'));