let uint8array = new Uint8Array(16);

let num = 256;
console.log(num.toString(2)); // 100000000 (binary representation)

uint8array[0] = 256;
uint8array[1] = 257;

console.log(uint8array[0]); // 0
console.log(uint8array[1]); 