function f(x) {
    alert(x);
}

delay(func, delaySec)
{
    let cache = new Map();
    return function () {
        if (cache.has(delaySec)) {
            setTimeout(delaySec)
            func.call(this, ...arguments);
        }
    }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

//if it has the same miliseconds return the resulsts
//if cache has delay sec delay then return else add to cache t delay then return