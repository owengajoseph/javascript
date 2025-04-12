// let date = Date.parse('2012-2-20T12:3');

//let date = new Date('2024, 2, 23');
//console.log(date);

// let date = new Date('2017-01-26');

// console.log(date);

// let date = setUTCDate('2017-01-26');
// console.log(date);

//Feb 20, 2012, 3: 12am

// -03:00

/*
everything i try it prints 1 month later
i think it is a built in problem or i don't know.
 */
let date = Date.parse('2012-03-20T00:12:00.00-03:00');
// let date = Date.parse('2012-01-26T13:51:50.417-07:00')
console.log(date);
let nowDate = new Date(date);
console.log(nowDate);

let d2 = new Date("2012-02-20T03:12");
console.log(d2);