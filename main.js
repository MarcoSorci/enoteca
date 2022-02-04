//brand, name, priceNoTax, grade
//(brand, name, priceNoTax, grade, bottleYear, grapeVariety){


const beer1 = new Beer("Heineken", "Pina", 3, 5, "Ale");
const beer2 = new Beer("Ichnusa", "Pino", 2, 4.5, "Lager");
const beer3 = new Beer("Desperados", "Pinuccia", 4, 4, "IPA");
const beer4 = new Beer("Moretti", "Pinetta", 3, 5.5, "Blonde");

const wine1 = new Wine("Champagne", "Le Bidet", 30, 12, 1999, "Sauvignon");
const wine2 = new Wine("Colle dei Luni", "Vermentino", 12, 10, 2010, "Vermentino");
const wine3 = new Wine("Pigato", "Vecchi", 10, 8, 2011, "Montonico");
const wine4 = new Wine("Chardonnay", "Le Franc", 18, 7, 2017, "Regine");

const super1 = new SuperAlc("Soplica", "Wodka", 10, 30);
const super2 = new SuperAlc("Bourbon", "Whisky", 17, 20);
const super3 = new SuperAlc("Bacardi", "Rum", 18, 15);
const super4 = new SuperAlc("Gordon", "Gin", 17, 40);


console.log(beer1.tostring());
console.log(wine2.tostring());
console.log(super4.tostring());

console.log(wine2.generatecode());
console.log(wine2.calculatePrice());
console.log(super2.calculatePrice());