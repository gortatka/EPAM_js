let films = ["one", "two", "three"];
for (let film of films) {
    console.log(film);
}
let autos = ["reno", "volvo", "volksvagen"]
let strAuto = autos.join(",")
console.log(strAuto);
let arrAuto = strAuto.split(",");
console.log(arrAuto)

let names = ["Tanya", "Vasya", "Vika"]
let nameHello = names.map(name => "Hello" + " " + name);
console.log(nameHello)
var keys = ["one", "two", "three"];
var obj = {};
keys.forEach(function(v) {
    obj[v] = true;
});
console.log(obj);

let arr = [1, 6, 7, 8, 3, 4, 5, 6];
arr.sort().reverse();
console.log(arr);

let arr1 = [1, 6, 7, 8, 3, 4, 5, 6];
let res = arr1.filter(el => el > 3);
console.log(res);

function match(number, arr) {

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == number) {
            console.log(arr[i])
        }
    }
}
match(5, [3, 8, 6, 5])

let a;
while (a > 10) {
    console.log(a)
}

for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
return num > 1;

let b;
if (b % 2 != 0) {
    console.log(b)
}