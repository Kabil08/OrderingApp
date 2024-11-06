// Create a new promise

const promise = new Promise(function (resolve, reject) {
    resolve("Hi, I'm here");
}) 

// Old way of getting the promise

function getData() {
    return promise;
}

getData().then((res) => console.log(res));

// Resolving promise with setTimeout:

const promiseWithTimeout = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Hi, I'm here");
    }, 10000);
}) 

function getResultData () {
    promiseWithTimeout.then((res) => console.log(res));
    console.log("Hello world!!")
}
getResultData();

/*

    Question for above program: What should be the order of console.log
        First the resolved promise prints or the Hello world?
            Ans: Acutally as per the above program, the Hello world prints first, after the timeout expires, the resolved promise will print.
            Here the JS engine don't wait for promise to be resolved.
*/

//--------------------------------------------------------------------------------------------------------------------------------------

/* Async/Await */

// To write async function, began with the prefix of async.

// await can only be written inside a async function.

async function getResult () {
    const val = await promise;
    return val;
}

getResult().then((res) => console.log(res));

/* Async/await -> promise resolve after a setTimeout */

async function getResultWithTimeoutPromise () {
    const val = await promiseWithTimeout;
    console.log(val);
    console.log("Hello World 1");
}

getResultWithTimeoutPromise();

/*
    Async/await
    Question for above program: What should be the order of console.log
        First the resolved promise prints or the Hello world?
            Ans: Here,as per the above program, the Hello world prints second
                and the resolved promise prints first.

                Why?: If the call stack sees await, it will suspend the execution from the context and waits for the promise to be resolved.
                So, it will wait till the promise to be resolved and then the Hello world prints.
*/


