Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};
function f() {


    console.log("hello");
}
// alert("Hello!");


f.defer(1000); // shows "Hello!" after 1 second



/* Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

function f() {
    alert("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 sec */



let tet = {
    foo: function work() {
        console.log("helloworld");
    }
};