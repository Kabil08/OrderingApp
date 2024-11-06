/*

1. Promise can be created using a new Promise() constructor function.
2. This constructor function takes a callback function as argument. 
3. The callback function has 2 parameters named 'resolve' and 'reject'. Resolve and reject are the functions provided by JS.
4. We can only resolve or reject a promise. Nothing else can be done.
5. An error can also be created using new Error('error message').
6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
8. It can be useful in a way if we want to catch error for a particular portion of a chain.
9. We can have multiple catch based on requirement and then a general catch at the end.
10. Always remember to return a value in the promise chain for the next .then to use .
11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.

*/

const cartItems = ["shirts", "jeans", "shoes", "watch"];

/*
    The createOrder() is a async operation in back returning a promise

    const promise = createOrder(cartItems);

    promise.then(function (orderId) {
        console.log(orderId);
    });

*/

/* Let's create a promise */

// createOrder(cartItems).then((orderId) => {
//     console.log(orderId, "ORDERID");
// }).catch((err) => {
//     console.log(err.message);
// })

// function createOrder (cartItems) {
    
//     const pr = new Promise(function (resolve, reject) {
//         const validateCart = false;

//         if (validateCart) {
//             resolve("123");
//         } else {
//             reject(new Error("Cart has invalid items"));
//         }
//     });

//     return pr;
// }

/* ---------------------------------------------------------------------------------------------------------------------------------- */

/* ToDo:
     Write a promise chaining for following async operations:
        createOrder
        proceedToPayment
        orderSummary
        updateWallet
*/

createOrder(cartItems)
    .then((orderID) => {
        return proceedToPayment(orderID);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .then((paymentInfo) => {
        return orderSummary(paymentInfo);
    })
    .then((orderCompletion) => {
        return updateWallet(orderCompletion);
    })
    .then((walletInfo) => {
        console.log(walletInfo);
    })
    .catch((error) => {
        console.log(error.message);
    })
    then(function() {
        console.log('No matter what happens, I will get executed');
    });

function createOrder (cartItems) {
    const returnedPromise = new Promise(function (resolve, reject) {
        const validateCart = true;

        if(validateCart) {
            resolve("12345");
        } else {
            reject(new Error("The cart has invalid items"));
        }
    })

    return returnedPromise;
}

function proceedToPayment (orderID) {
    return new Promise(function (res, rej) {
        if (orderID) {
            res("Payment completed");
        } else {
            rej(new Error("Can't find the order"));
        }
    });
}

function orderSummary (paymentInfo) {
    return new Promise (function (res, rej) {
        if (paymentInfo) {
            res("Order has been placed successfully");
        } else {
            rej(new Error("Payment not completed yet"));
        }
    });
}

function updateWallet (orderCompletion) {
    return new Promise (function (res, rej) {
        if (orderCompletion) {
            res("Wallet updated successfully");
        } else {
            rej(new Error("Wallet not updated yet"));
        }
    }); 
}