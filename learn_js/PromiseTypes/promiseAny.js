const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Promise1 resolved");
    // }, 3000);

    setTimeout(() => {
        reject("Promise1 rejected");
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Promise2 resolved");
    // }, 3000);

    setTimeout(() => {
        reject("Promise2 rejected");
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Promise3 resolved");
    // }, 2000);

    setTimeout(() => {
        reject("Promise3 rejected");
    }, 2000);
})

Promise.any([p1, p2, p3])
    .then((res) => {
        console.log(res, "SUCCESS");
    })
    .catch((err) => {
        console.log(err, "ERROR");
        console.log(err.errors); // to get the rejected error messages.
    })

/*

    Promise.any()
        Here, it behaves kinda promise.race but,

        Positive case:
            It will provide the output as value (not an array) with the first resolved promise. It will wait for the first promise to be resolved. 
            Even if the first promise is rejected, it will wait for second promise, even it fails it waits for the last (third) promise, if it is resolved, it will provide that as an output.

            Then arises a question, what if all the promises are rejected,
                It will throw an aggregate error in a array (not a value).
                But we can't simply get it via err in catch, we have to drill down to err.errors.

            Output if all promises rejected

            Line 36:
                AggregateError: All promises were rejected

            Line 37:
                (3) ['Promise1 rejected', 'Promise2 rejected', 'Promise3 rejected']
            

*/