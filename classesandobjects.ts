
class LivingBeing {
    breathe(){
        console.log("I breathe");
    }
}

class HumanBeing extends LivingBeing{
    metathink(){
        console.log("I think therefore I am");
    }
}

class BreathableFabric {
    breathe(){
        console.log("cool Fabric")
    }
}


// 1. HumanBeing is a type of LivingBeing
// 2. HumanBeing is more specific and LivingBeing is more generic
// 3. HumanBeing can do everything a LivingBeing can do

// let obj = new HumanBeing();
// obj.breathe()
// obj.metathink()

// real + imaginary 

class RealNumber {
    realvalue : number
    constructor (rn :number){
        console.log("In the constructor of RealNumber")
        this.realvalue = rn
        console.log("Finished building realnumber")
    }
    print(){
        console.log(this.realvalue)
    }
}

class ImgNumber extends RealNumber{
    imaginary :number
    constructor(rn: number, img:number){
        console.log("In the constructor of ImgNumber")
        super(rn)
        this.imaginary = img
        console.log("Finished building ImgNumber")
    }

    print(){
        console.log(this.realvalue + "+i" + this.imaginary)
    }

}

let img1 = new ImgNumber(2, 5)
img1.print()


let fruits :string[] = ['Apple', 'banana']

fruits.push('Grapes')

console.log(fruits)