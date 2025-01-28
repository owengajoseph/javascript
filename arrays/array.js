function camelize(word) {

  //initial array split
    let arr = word.split('-');

    //i will sotre array with uppercase then join 
    let storeArray = [];
    console.log(storeWord);
    for (let i = 0; i < storeWord.length; i++) {
        //task now is making the index 0 to uppercase
        //and the join 
        let uper = storeWord[i].charAt(0).toUpperCase();
        uper = uper + storeWord[i].slice(1, storeWord[i].length);
        storeArray[i] = uper;
       
    }
    let str = storeArray.join('');
    console.log(str);
}



camelize("background-color");

// their  solution but the ideas was the same 
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }