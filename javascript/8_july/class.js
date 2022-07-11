// classes and modules
// class Mobile{
// constructor(brand,ram,processor){
//     this.brand =brand;
//     this.ram = ram;
//     this.processor = processor;
// }

// getBrand(){  
//     return this.brand
// }
// getRam(){
//     return this.ram
// }
// getProcessor(){
//     return this.processor
// }
// setRam(name){
//     this.ram = name;
// }



// }

// let mobile1 = new Mobile("Realme", "8gb", "SD855+")
//     console.log(mobile1.getBrand())



//overriding a constructor in INheritance


class Mobile{
    constructor(brand,ram,processor){
        this.brand =brand;
        this.ram = ram;
        this.processor = processor;
    }
    
getBrand(){
    return this.brand
}
getRam(){
    return this.ram
}
getProcessor(){
    return this.processor
}
setRam(name){
    this.ram = name
}
getProductDetails(){
    return `The brand is ${this.brand} - ram is ${this.ram} - processor is ${this.processor}  }`

}
}
class Mob extends Mobile{
    constructor(brand,ram,processor,name){
        super(brand,ram,processor)
         this.ram = ram

    }
    getName(){
       return this.name 
    }
    getProductDetails(){
        return `The brand is ${this.brand} - ram is ${this.ram} - processor is ${this.processor} - name is${this.name} }`
    
    }
}

 let ele = new Mob("MI","6gb","SD676","mi12")
console.log(Mob.getName())


     
