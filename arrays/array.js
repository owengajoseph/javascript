function camelize(word) {

    let storeWord = word.split('-');
    if (storeWord.length == 0) {
        return;
    }
    else {

        for (let word of storeWord) {
            console.log(word);
        }
    }
}
    


camelize("background");