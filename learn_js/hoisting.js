// console.log(x);

// console.log(printOutput());

// var x = 10;

// function printOutput() {
//     console.log("I have printed");
// }

// output for above program

// x - undefined
// printOutput() -> 'I have printed' (since the memory allocation phase is completed, it will print 'I have printed' eventhough the function is declared beneath the console.log)
// undefined -> since the function execution is deleted.

var x = 10;

function printOutput() {
    console.log("I have printed");
}

console.log(x);

console.log(printOutput());

// output

// x -> value 10
// on calling printOutput() -> I have printed
// then last line it will print the output as 'undefined', *since the function's execution is deleted, it will return undefined*


/*

Learn more about hoisting via below link.

https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/ 

Summary:

   The interpreter executes the whole code, it first hoists (raises, or lifts) the declared function to the top of the scope 
   it is defined in.

   Only var is initialized with a value of undefined.

   Others let, const will not have a default value.

   If we try to access them before initialization, it will throw as Cannot access 'name' before initialization (for let and const)

    console.log(name)
    ReferenceError: Cannot access 'name' before initialization

    let name = "Kabil"

   There is a concept called temporal dead zone

   The area between the top of the global scope and the line of declaration of the variable is the temporal dead zone.

   console.log(myName) // temporal dead zone for myName
    // temporal dead zone for myName
    // temporal dead zone for myName
    // temporal dead zone for myName
    // temporal dead zone for myName
    // temporal dead zone for myName
    // temporal dead zone for myName
    let myName = "Kabil" // now accessible
    // now accessible
    // now accessible
    // now accessible

*/ 