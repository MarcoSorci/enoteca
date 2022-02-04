class Common {
    constructor(brand, name, priceNoTax, grade) {
        this.brand = brand;
        this.name = name;
        this.priceNoTax = priceNoTax;
        this.grade = grade;
        this.insertionDate = (new Date()).getFullYear()
        this.uniqueCode = Common.generatecode(name, brand);

    }

    static generatecode(name, brand) {
        // let now = new Date();
        let code = name[0] + name[1] + brand[0] + brand[1] + (Math.random() * 100).toFixed(); 
        return code;
    }

    tostring() {
        let itemDesc = "ITEM: \n" +
            "Name: " + this.name + "\n" +
            "Brand: " + this.brand + "\n" +
            "Price: " + this.calculatePrice() + "\n" +
            "Grade: " + this.grade + "%" + "\n" +
            "Insertion Year: " + this.insertionDate + "\n" +
            "Code: " + this.uniqueCode + "\n"
        return itemDesc;
    }

    // calculatePrice(tax){
    //     let priceWithTax = this.priceNoTax + ((this.priceNoTax * tax) / 100)
    //     return priceWithTax
    // }
}