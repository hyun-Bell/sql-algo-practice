type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    
    return new Promise<T[]>((resolve, reject) => {
        const result = Array(functions.length).fill(null);
        functions.forEach((fn, i) => {
            fn().then((value) => {
                result[i] = value;
                if (result.every((v) => v !== null)) {
                    resolve(result);
                }
            }).catch((reason) => {
                reject(reason);
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */