function a () {
    var b = 10;
    c();

    function c() {
        // the var b is accessible from here.
        console.log(b)
        // prints 10.
    }
}

a();

console.log(b);

// Uncaught ReferenceError: b is not defined



/*

1. Scope chain.
    Global scope -> a() scope -> c() scope.

    c -> has accessible till global scope (i.e Global scope and function(a) scope (var b scope) and local memory of c scope)
    a -> has accessible till global scope (i.e Global scope and local memory of a scope. (var b scope))
    global scope -> assigned to null.


    Lexical scope -> Local memory and lexical environment of parent.

    For function c:

    Local memory (i.e is nothing (no values declared))
    Lexical environment of parent -> that is b;
        Value of b is accessible in function c.

    For function a:
    Local memory (i.e value b is assigned with 10)
    Lexical environment of parent -> that is global scope (no values assigned)

    This drilling process is called scope chain.


*/
