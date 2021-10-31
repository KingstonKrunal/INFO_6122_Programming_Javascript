let str = "Hello Mr Krunal Shah";
let num = 2000;

//2A - Concatenate both variables
str = str.concat(" ", num);
console.log(str); 

//2B - Convert str to uppercase and concatenate it with the original str
str = str.toUpperCase().concat(" ", str);
console.log(str);

//2C - Convert str to an array
const strSplitByWord = str.split(' ');
console.log(strSplitByWord);

//2D - Reverse the array from 2C
const arrayStr = strSplitByWord.slice().reverse();
console.log(arrayStr);

//2E - Convert array from 2D to a string
let arrayToString = arrayStr.join(' ').toString();
console.log(arrayToString);

//2F - Combine arrays from 2C and 2D
const combineArrays = strSplitByWord.concat(arrayStr);
console.log(combineArrays);


//Object
const car = {
    company: "Honda",
    name: "Civic",
    color: "Black",
    warrantyInYears: 5
};

//3A - Add an additional property using dor operator
car.tyreCompany = "MRF";
console.log(car.tyreCompany);

//3B - Create a string using all the values of object with space
let strFromObject = car.company + " " + car.name + " " + car.color + " " + car.warrantyInYears + " " + car.tyreCompany;
console.log(strFromObject);

//3C - Replace any word in a string with my name
strFromObject = strFromObject.replace("Black", "Krunal");
console.log(strFromObject);