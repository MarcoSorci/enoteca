class SuperAlc extends Common {
    constructor(brand, name, priceNoTax, grade/*, insertionDate*/) {
        super(brand, name, priceNoTax, grade/*, insertionDate*/)
        this.tax = 30

    }

    calculatePrice() {
        let priceWithTax = (this.priceNoTax + ((this.priceNoTax * this.tax) / 100)).toFixed(2)
        return priceWithTax + "€"
    }
}