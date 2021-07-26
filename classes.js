class Animal {
    constructor(name) {
        this.move = 0;
        this.name = name;
    }
}

class Cat extends Animal {

}
let cat = new Cat("Fast");
cat.move();