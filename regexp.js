let str = 'ahb acb aeb aeeb adcb axeb'
let strArr = str.split(" ");
console.log(strArr)
let regexp = /a*b/g;
let result = str.match(regexp);

let str1 = '2+3 223 2223';
let regexp = str1.substr(0, 3);
console.log(regexp);

var now = new Date();
console.log(now.getFullYear())
console.log(now.getMonth());
console.log(now.getTime())