function f() {
    alert("Hello!");
  }
  

  //this looks great because everything iherit from the HUGE object which has the functions 
  
  Object.prototype.defer=function(sec){
      
      setTimeout(() => {
          console.log("Hello");
      }, sec);
  }

//I Cannot do this because this is a refrece to the huge object but if f.prototype is a refrence is it ===to the HUGE object?
  /* f.prototype.defer=function(sec){
      
      setTimeout(() => {
          console.log("Hello");
      }, sec);
  } */

  
  f.defer(1000); // shows "Hello!" after 1 second


  