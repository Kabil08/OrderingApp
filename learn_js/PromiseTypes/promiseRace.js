const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved");
    }, 4000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Promise2 resolved");
    // }, 3000);

    setTimeout(() => {
        reject("Promise2 rejected");
    }, 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3 resolved");
    }, 3000);
})

Promise.race([p1, p2, p3])
    .then((res) => {
        console.log(res, "SUCCESS");
    })
    .catch((err) => {
        console.log(err, "ERROR");
    })

/*

    Promise.race()
        Here, the logic is different.

        As the name indicated, it is a race with three promises.
            It will result the output as a value(not an array), of which promise executed first(It can be a resolved promise or a rejected promise)
            Here, it is matter of who comes first.

*/