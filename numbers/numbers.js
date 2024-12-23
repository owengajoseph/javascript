//
function random(min, max) {
    //     min=min-1;
    //     max=max+1;
    //     return rand = Math.random(min, max);
    //prefered solution 
    //it does not pass the range of max.
    return Math.random() * (max - min) + min;
}




// console.log( random(1, 5) ); 
// console.log( random(1, 5) ); 
// console.log( random(1, 5) );

// console.log(Math.floor(1));

console.log(random(0,5));
