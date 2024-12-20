function readNumber() {
    do {
        let num = +prompt("enter a number", 0);
        //the resulting value must be returned as a number
        //the visitor should enter a valid number
        if (isFinite(num) == true) {
            return num;

        }
    } while (true);



}

alert(readNumber());