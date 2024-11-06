const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolved 1!");
    }, 10000)
})

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolved 2!");
    }, 20000)
})

async function promiseHandler () {
    const val1 = await promise1;
    console.log(val1);
    console.log("Print One");

    const val2 = await promise2;
    console.log(val2);
    console.log("Print Two");
}

promiseHandler();

/* 
    What should be the output?
        Ans: It will print val1 first after 10000 ms(10 sec) and then the Print One will be printed
        Then, it will print val2 after 10 sec (eventhough it is a 20sec timeout, it will print after 10 sec itself since the 10sec already been executed during the time of promise1) and follows the Print Two will be printed. 

*/

/*

    What if the first promise (promise1) has 20000ms (20 sec) and the second promise (promise2) has 10000 sec (10 sec)
    then, what will be the output?

    Ans: It will print val 1 after 20 sec follows the print one and then immediately it will print val2 and print two.
    (It prints immediately val 2, because it already waited for 10sec during the first promise and had the value, so after the resolve of promise 1, it printed immediately.)

*/