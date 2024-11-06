const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 10000)
})

async function promiseHandler () {
    const val1 = await promise1;
    console.log(val1);
    console.log("Print One");

    const val2 = await promise1;
    console.log(val2);
    console.log("Print Two");
}

promiseHandler();

/* 
    What should be the output?
        Both have the same promise, whether it resolve seperately, concurrently?
            Ans: It will print val1 first after 10000 ms(10 sec) and then the Print One will be printed
            Then as it is the same promised that has been resolved earlier, this time it will not wait for 10 sec, it will print immediately.

*/