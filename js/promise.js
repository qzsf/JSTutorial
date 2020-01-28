export function promiseFunction() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('timeout!');
        }, 1000);
    });
    promise.then(
        value => console.log('fulfilled: ' + value),
        error => console.log('rejected' + error)
    )
    console.log('continuing after promise...');
}

