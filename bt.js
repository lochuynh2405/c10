class Fraction {
    #tu
    #mau
    constructor(tu = 0, mau = 1) {
        this.#tu = tu
        this.#mau = mau
    }
    getTu() {
        return this.#tu
    }
    setTu(tu) {
        this.#tu = tu
    }
    getMau(){
        return this.#mau
    }
    setMau(mau){
        
        if(mau != 0){
            this.#mau = mau
        }
    }
    
}

function main() {
    const f = new Fraction()
    f.setMau(7)
    console.log(f.getMau())
    
}

main()