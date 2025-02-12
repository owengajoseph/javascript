function object(name) {
    this.name = name;
    console.log(name);
}


let obj = new object("name1")
let obj2 = new obj.constructor("name2");

//EXAMPLE THAT MAKES IT WORK WRONG
function User(name) {
    this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name); // undefined