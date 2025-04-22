let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

// let startTime = new Date();
// for (objs in pockets) {
//     console.log(objs);
// }
// let endTime = new Date()

// console.log(startTime.getMilliseconds() - endTime.getMilliseconds());//takes 3 milliseconds


let startTime = new Date();
console.log(pockets.glasses);
let endTime = new Date()

console.log(endTime - startTime);




let hamster = {

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {

    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: speedy
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple