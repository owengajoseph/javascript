function f(x) {
    console.log(x);
}

function delay(func, delaySec) {
    let cache = new Map();
    return function (x) {
        if (cache.has(delaySec)) {
            console.log(x);
        }
        setTimeout(() => { func.call(this, x) }, delaySec);


    }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

//if it has the same miliseconds return the resulsts
//if cache has delay sec delay then return else add to cache t delay then return