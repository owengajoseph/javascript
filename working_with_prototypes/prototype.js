function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};
console.log(rabbit.eats == true);
console.log(rabbit.eats);
let rabbit2 = new Rabbit();
console.log(rabbit2.eats == true);
//by default all functions have f.prototype ={constructor:f}, so we can get the constructor fo an object by accessing it "constructor" property
//Naturally, if we do nothing, the consturctor property is available to all rabbits through [[prototype]]
//OBJECTS ARE ASSIGNED BY REFRENCE.