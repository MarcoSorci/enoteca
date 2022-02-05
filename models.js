class Common {
    constructor(brand, name, priceNoTax, grade, quantity) {
        this.brand = brand;
        this.name = name;
        this.priceNoTax = priceNoTax;
        this.grade = grade;
        this.quantity = quantity;
        this.insertionDate = (new Date()).getFullYear()

    }

    generatecode() {
        // let now = new Date();
        let code = this.name[0] + this.name[1] + this.brand[0] + this.brand[1] + this.grade //+ (Math.random() * 100).toFixed(); 
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
            "Code: " + this.generatecode() + "\n"
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
class Beer extends Common{
    constructor(brand, name, priceNoTax, grade, quantity, beerType){
        super (brand, name, priceNoTax, grade, quantity)
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