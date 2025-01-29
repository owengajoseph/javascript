function filterRangeInPlace(arr, a, b) {
    return storeArray = arr.filter(value =>  value >= a && value <= b)
}


let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4

// console.log( arr ); // [3, 1]
//NOTE the array is passed by refrence 

/* 
//there soulution 
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
  alert( arr ); // [3, 1]

   */