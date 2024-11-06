// function x () {
//     var a = 10;
//     function y () {
//         console.log(a);
//     }
//     return y;
// }
// var result = x();
// console.log(result);

// result();


const counter = (() => {
    let count = 0;
    function increment() {
        count = ++count;
        return count;
    }

    increment.reset = function () {
        count = 0;
    }

    return increment;
})();

// var result = counter();

console.log(counter());
console.log(counter());
console.log(counter());
counter.reset();
console.log(counter());
console.log(counter());
