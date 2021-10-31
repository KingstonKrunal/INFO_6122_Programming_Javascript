function calculateSimpleInterest(principle, interestRate, noOfDays) {
    let simpleInterest = parseFloat((principle * interestRate * noOfDays) / 100);

    return simpleInterest;
}

let sI = calculateSimpleInterest(2000, 7, 20);

console.log("Named Function Simple Interest = " + sI);



arrowSCI = (principle, interestRate, noOfDays) => {
    let simpleInterest = parseFloat((principle * interestRate * noOfDays) / 100);

    return simpleInterest;
}

let arrowSI = arrowSCI(5000, 7, 25);

console.log("Arrow Function Simple Interest = " + arrowSI);



let concateString = function(s1, s2) {
    let singleString = s1 + " " + s2.toUpperCase();

    return singleString;
};

let output1String = concateString("hello", "world");
let output2String = concateString("Java", "Script").split(' ');

console.log(output1String);
console.log(output2String);