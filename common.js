class Common {
    constructor(brand, name, priceNoTax, grade, quantity) {
        this.brand = brand;
        this.name = name;
        this.priceNoTax = priceNoTax;
        this.grade = grade;
        this.quantity = quantity;
        this.insertionDate = (new Date()).getFullYear()
        this.uniqueCode = Common.generatecode(name, brand);

    }

    static generatecode(name, brand) {
        // let now = new Date();
        let code = name[0] + name[1] + brand[0] + brand[1] + (Math.random() * 100).toFixed(); 
        //toFixed converts to string and removes decimals (or sets max decimals)
        return code;
        //this.constructor.name would pick the class name
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

    addquantity(number){
        return this.quantity += number
    }
    
    removequantity(number){
        if (this.quantity >= number) {
            return this.quantity -= number
        } else {
            return "Not enough bottles."
        }
        
    }

    // calculatePrice(tax){
    //     let priceWithTax = this.priceNoTax + ((this.priceNoTax * tax) / 100)
    //     return priceWithTax
    // }
}