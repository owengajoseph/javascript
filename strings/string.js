function ucFirst(str) {
    let storeString;
    for (i = 0; i <= str.length-1; i++) {
        if (i == 0) {
            getFirstWord = str[0];

            storeString = getFirstWord.toUpperCase();
            continue;
        }
        storeString += str[i];
    }
    return storeString;
}


console.log(ucFirst('owenga'));

/*
the solution.
let newStr = str[0].toUpperCase() + str.slice(1); 
 */