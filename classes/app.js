class Ring{
    //constructor: same name as class
    //executes as soon you use the class to create a new object
    //used to initialize object properties
    //if not defined, js will create an empty one
    constructor(color, gem) {
        this.color = color
        this.gem = gem
    }

    print(){
        console.log(`${this.color} ${this.gem} ring`)
    }
}

const sapphireRing = new Ring()
const rubyRing = new Ring('gol')

console.log(sapphireRing)

class Car{
    constructor(brand, year) {
        this.brand = brand
        this.year = year
    }

    getAge(year){
        let date = new Date()
        return date.getFullYear() - this.year
    }

    print(){
        console.log(`This ${this.brand} is ${this.getAge()}`)
    }
}