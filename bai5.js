let readline = require('readline-sync');
class Fraction {
    constructor(a = 0, b = 0) {
        this.a = a
        this.b = b
    }
    scan() {
        this.a = Number (readline.question('Nhap tu so: '))
        this.b = Number (readline.question('Nhap mau so: '))
    }
    print() {
        return (this.a + '/' + this.b)
    }
    getArea() {
        return this.a / this.b
    }
}



function main() {
    var item = new Fraction()
    item.scan()
    console.log(item.print())
    
    
}
main()