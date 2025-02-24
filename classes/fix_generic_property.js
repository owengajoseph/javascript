class Rabbit extends Object {
    constructor(name) {
        //super helps in extending the class.
        super()
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

alert(rabbit.hasOwnProperty('name')); // Error


///other subtle difrencess
class Rabbit extends Object { }

alert(Rabbit.prototype.__proto__ === Object.prototype); // (1) true
alert(Rabbit.__proto__ === Object); // (2) true

/* 

As we know, the “extends” syntax sets up two prototypes:

   * Between "prototype" of the constructor functions (for methods).
    *Between the constructor functions themselves (for static methods).

 */