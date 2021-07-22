let car = {
    color: "back",
    power: function(p) {
        console.log(p)
    }
}
car.color = "green"
car.power(9)

let sum = (apple, pear) =>
    apple + pear
console.log(sum(5, 8))

let myName = "Tanya";

let userName = function() {
    let name = prompt("Введите ваше имя", "name");
    return name;
}

if (userName() == myName) {
    console.log("Привет " + " " + myName)
} else {
    console.log("Нет такого имени")
}

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}