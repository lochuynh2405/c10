let readline = require('readline-sync');
class Rectangle {
    constructor(w = 2, h = 3) {
        this.width = w
        this.height = h
    }
    scan() {
        this.width = Number (readline.question('nhap width: '))
        this.height = Number (readline.question('nhap height: '))
    }
    print() {

    }
    getArea() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side) // width = height = side
    }
scan(){
    this.width = Number (readline.question('nhap so side: '))
    this.height = this.width 
}
}

function main() {
    const s = new Square(7)
    s.scan()
    console.log(s.getArea())
    
}
main()