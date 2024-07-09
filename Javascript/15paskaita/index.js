
class Car {

    #drowned = false;

    constructor(year, type) {
        this.year = year;
        this.type = type;
    }

    getDrowned() {
        return this.#drowned;
    }

    setDrowned(newValue) {
        this.drowned = newValue;
    }

    getDescription() {
        console.log(`year: ${this.year} type: ${this.type} drowned: ${this.#drowned}`);
    }

}

const bmw = new Car(2000, "cuope")
const vw = new Car(2010, "transporter")

console.log(bmw);
console.log(bmw.drowned);
console.log(bmw.getDrowned);

bmw.getDescription()
vw.getDescription()



class Shape {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

class Triangle extends Shape{
    constructor(color, size) {
        super(color)
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

const tr = new Triangle("red", 20);


console.log(tr.getColor());
console.log(tr.getSize());






















