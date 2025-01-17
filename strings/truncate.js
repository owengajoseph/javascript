function truncate(str, maxlengh) {
    if (str.length > maxlengh) {
        store = str.slice(0, maxlengh) + "...";
        console.log(store);

    }
    else {
        // alert(str);
    }

}


truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);