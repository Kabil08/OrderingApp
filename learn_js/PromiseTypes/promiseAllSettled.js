const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved");
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 resolved");
    }, 3000);

    // setTimeout(() => {
    //     reject("Promise2 rejected");
    // }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Promise3 resolved");
    // }, 2000);

    setTimeout(() => {
        reject("Promise3 rejected");
    }, 2000);
})

Promise.allSettled([p1, p2, p3])
    .then((res) => {
        console.log(res, "SUCCESS");
    })
    .catch((err) => {
        console.log(err, "ERROR");
    })

/*

    Promise.allSettled()
        In case all the resolved successfully, it will wait till last promise to be executed, so after 3 sec, all the promises are outputted in a array.
        Interesting thing about allSettled is, it will an array of objects with individual status and value.
        
        Output as below:
            (3) [{…}, {…}, {…}]0: {status: 'fulfilled', value: 'Promise1 resolved'}1: {status: 'fulfilled', value: 'Promise2 resolved'}2: {status: 'fulfilled', value: 'Promise3 resolved'}length: 3[[Prototype]]: Array(0)

        In case of fail scenario, it will wait for other promises to be executed and output it as an array with the resolve and reject message.
        
        Output for failure scenarios:
            (3) [{…}, {…}, {…}]0: {status: 'fulfilled', value: 'Promise1 resolved'}1: {status: 'fulfilled', value: 'Promise2 resolved'}2: {status: 'rejected', reason: 'Promise3 rejected'}length: 3[[Prototype]]: Array(0) 'SUCCESS'

        It won't come in catch bloc, it will print the output from then block.

*/