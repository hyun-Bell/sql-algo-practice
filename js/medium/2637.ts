type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {

    return async function (...args) {
        let timeoutId;

        const timeoutPromise = new Promise((_, reject) => {
            timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });
    
        const fnPromise = new Promise((resolve, reject) => {
            try {
                resolve(fn(...args));
            } catch {
                reject("Error");
            }
        });

        try {
            const result = await Promise.race([fnPromise, timeoutPromise]);

            return result;
        }
        finally {
            clearTimeout(timeoutId);
        }

    }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */


/*
 type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return function (...args) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then(resolve)
                .catch(() => reject("Error"))
                .finally(() => clearTimeout(timeoutId));
        });
    };
}
*/