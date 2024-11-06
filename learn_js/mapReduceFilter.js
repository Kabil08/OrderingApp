/*

 map -> To iterate through the array and transfrom each element of the array.
 Eg: To make the elements of the array to be double, triple.

 filter: To filter the elements of the array based on a certain condiiton
 Eg: To find the elements that are divisible by 3, 2, greater than 2

 reduce: It takes two parameters in the function accumulate and current.
    And it takes the second parament to set the default value to accumulate.
 Eg: To sum the elements, max of numbers.
 If we have to obtain a desired result over the array, use reduce.

*/

const arrayElements = [2, 3, 4, 5, 6];

//map

function doubleElement(arr) {
    return 2 * arr;
}

function tripleElement(arr) {
    return 3 * arr;
}

const doubleElementOutput = arrayElements.map(doubleElement);
const tripleElementOutput = arrayElements.map(tripleElement);

const doubleAsArrowfunctions = arrayElements.map(arr => arr * 2);


console.log(doubleElementOutput);
console.log(tripleElementOutput);
console.log(doubleAsArrowfunctions);


// filter

function filterByOdd(arr) {
    return arr % 2;
}

const filterByOddAsNormalFunctions = arrayElements.filter(filterByOdd);

const filterByOddAsarrowFunctions = arrayElements.filter(arr => arr % 2)

console.log(filterByOddAsNormalFunctions);
console.log(filterByOddAsarrowFunctions);



// reduce

const findSum = arrayElements.reduce(function (sum, curr) {
    sum = sum + curr;
    return sum;
}, 0);

console.log(findSum);

const accounts = [
    { name: "Kabil", age: 24 },
    { name: "Yuvaraj", age: 24 },
    { name: "Mohan", age: 26 },
    { name:"Veeresh", age: 27 },
]

// o/p: { 24: 2, 26: 1, 27: 1 }

const output = accounts.reduce(function (res, currentAcc) {
    if (res[currentAcc.age]) {
        res[currentAcc.age] = ++res[currentAcc.age];
    } else {
        res[currentAcc.age] = 1;
    }

    return res;
}, {});

console.log(output);

const outputNameWithAgeGreaterthan26 = accounts.reduce(function (res, curr) {
    if (curr.age > 26) {
        res = [...res, curr.name];
    }

    return res;
}, []);

console.log(outputNameWithAgeGreaterthan26, "Hii");


// filter

const filteredValues = accounts.filter(acc => acc.age>26).map(x => x.name)

console.log(filteredValues);
