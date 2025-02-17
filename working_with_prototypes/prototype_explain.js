// example1
let firstName = { name: "joseph" };

function f() {
// by default:
// Rabbit.prototype = { constructor: Rabbit }
//but we have changed { constructor: Rabbit } to now name which is equal to {name: "joseph"}
}
f.prototype =firstName;
let myName = new f();//everything is intialized here from function f
console.log(myName.name)


//example 2

function Rabbit() { }

// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

console.log(rabbit.constructor == Rabbit); // true (from prototype)
console.log(rabbit.__proto__.constructor == Rabbit);

let arr = [1, 2, 3];

// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null


class foo{}