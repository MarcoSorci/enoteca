class Wine extends Common{
    constructor(brand, name, priceNoTax, grade/*, insertionDate*/, bottleYear, grapeVariety){
        super (brand, name, priceNoTax, grade/*, insertionDate*/)
        this.bottleYear = bottleYear
        this.grapeVariety = grapeVariety
        this.tax = 22
        
    }
    
    calculatePrice(){
        let priceWithTax = (this.priceNoTax + ((this.priceNoTax * this.tax) / 100)).toFixed(2)
        return priceWithTax + "€"
    }

    tostring(){
        const code =  super.tostring() +
        "Grape Variety: " + this.grapeVariety + "\n" +
        "Bottling Year: " + this.bottleYear 
        return code
    }
}