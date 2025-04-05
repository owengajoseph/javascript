function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

//this is an example of providing callbacks

loadScript(src, function (flag, script) {
    if (full == nul) {
        //do something with the script
    }
    else ()
    {
        //print script not found.
    }
})


// example for returning a promise
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        //event nedd to be triggerd.
        //guessing they are triggerd after document.head.append
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
//here the script will run executing things above even though it was added in the head dynamically.
        document.head.append(script);
    });
}


loadScript("/article/promise-chaining/one.js")
    .then(function (script) {
        return loadScript("/article/promise-chaining/two.js");
    })
    .then(function (script) {
        return loadScript("/article/promise-chaining/three.js");
    })
    .then(function (script) {
        // use functions declared in scripts
        // to show that they indeed loaded
        one();
        two();
        three();
    });