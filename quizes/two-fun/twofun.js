let obj = {};//this obj has been created on the global
function A() { return obj; }//return the ref of the obj

function B() { return obj; }//return ref of the obj

//here we create two constructors which return the same ref from obj and the they are compared.
alert( new A() == new B() ); // true
