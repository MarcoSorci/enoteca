class SuperAlc extends Common {
    constructor(brand, name, priceNoTax, grade, quantity) {
        super(brand, name, priceNoTax, grade, quantity)
        this.tax = 30

    }

    calculatePrice() {
        let priceWithTax = (this.priceNoTax + ((this.priceNoTax * this.tax) / 100)).toFixed(2)
        return priceWithTax + "€"
    }
}