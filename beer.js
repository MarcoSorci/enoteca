class Beer extends Common{
    constructor(brand, name, priceNoTax, grade/*, insertionDate*/, beerType){
        super (brand, name, priceNoTax, grade/*, insertionDate*/)
        this.beerType = beerType
        this.tax = 22
        
    }
    
    calculatePrice(){
        let priceWithTax = (this.priceNoTax + ((this.priceNoTax * this.tax) / 100)).toFixed(2)
        return priceWithTax + "€"
    }

    tostring(){
        const code =  super.tostring() +
        "Beer Type: " + this.beerType + "\n"
        return code
    }

    // generatecode(){
    //     const newcode = super.generatecode() + this.uniqueCode
    //     return newcode
    // }
}

