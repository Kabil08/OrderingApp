const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved");
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Promise2 resolved");
    // }, 3000);

    setTimeout(() => {
        reject("Promise2 rejected");
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3 resolved");
    }, 2000);
})

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res, "SUCCESS");
    })
    .catch((err) => {
        console.log(err, "ERROR");
    })

/*

    Promise.all()
        In case all the resolved successfully, it will wait till last promise to be executed, so after 3 sec, all the promises are outputted in a array.
        In case of fail scenario, it won't wait for all to be executed, if it sees the promise to be failed it will output the error.

*/