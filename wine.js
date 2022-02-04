class Wine extends Common{
    constructor(brand, name, priceNoTax, grade, quantity, bottleYear, grapeVariety){
        super (brand, name, priceNoTax, grade, quantity)
        this.bottleYear = bottleYear
        this.grapeVariety = grapeVariety
        this.tax = 22
        
    }
    
    calculateYear(){
        let currentyear = (new Date()).getFullYear()
        let age = currentyear - this.bottleYear
        return age
    }

    calculatePrice(){
        let priceWithTax = (this.priceNoTax + ((this.priceNoTax * this.tax) / 100))
        let fullPrice =  (priceWithTax * this.calculateYear() / 100)
        let sum = fullPrice + priceWithTax
        return sum.toFixed(2) + "€" 
    }

    tostring(){
        const code =  super.tostring() +
        "Grape Variety: " + this.grapeVariety + "\n" +
        "Bottling Year: " + this.bottleYear 
        return code
    }
}