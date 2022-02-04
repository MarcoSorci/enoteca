class Common {
    constructor(brand, name, priceNoTax, grade) {
        this.brand = brand;
        this.name = name;
        this.priceNoTax = priceNoTax;
        this.grade = grade;
        this.insertionDate = (new Date()).getFullYear()

    }

    generatecode() {
        // let now = new Date();
        let code = this.name[0] + this.name[1] + this.brand[0] + this.brand[1] + this.grade;
        return code;
    }

    tostring() {
        let itemDesc = "ITEM: \n" +
            "Name: " + this.name + "\n" +
            "Brand: " + this.brand + "\n" +
            "Price: " + this.calculatePrice() + "\n" +
            "Grade: " + this.grade + "%" + "\n" +
            "Insertion Year: " + this.insertionDate + "\n"
        return itemDesc;
    }

    calculatePrice(tax){
        let priceWithTax = this.priceNoTax + ((this.priceNoTax * tax) / 100)
        return priceWithTax
    }
}