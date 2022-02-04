//brand, name, priceNoTax, grade
//(brand, name, priceNoTax, grade, bottleYear, grapeVariety){


const beer1 = new Beer("Heineken", "Pino", 3, 5, 50, "Ale");
const beer2 = new Beer("Ichnusa", "Pino", 2, 4.5, 50, "Lager");
const beer3 = new Beer("Desperados", "Pinuccia", 4, 4, 50, "IPA");
const beer4 = new Beer("Moretti", "Pinetta", 3, 5.5, 50, "Blonde");

const wine1 = new Wine("Champagne", "Le Bidet", 30, 12, 50, 1999, "Sauvignon");
const wine2 = new Wine("Colle dei Luni", "Vermentino", 12, 10, 50, 2010, "Vermentino");
const wine3 = new Wine("Pigato", "Vecchi", 10, 8, 50, 2011, "Montonico");
const wine4 = new Wine("Chardonnay", "Le Franc", 18, 7, 50, 2017, "Regine");

const super1 = new SuperAlc("Soplica", "Wodka", 10, 30, 50);
const super2 = new SuperAlc("Bourbon", "Whisky", 17, 20, 50);
const super3 = new SuperAlc("Bacardi", "Rum", 18, 15, 50);
const super4 = new SuperAlc("Gordon", "Gin", 17, 40, 50);


console.log(beer1.tostring());
console.log(wine2.tostring());
console.log(super4.tostring());

// console.log(wine2.generatecode());
console.log(wine2.calculatePrice());
console.log(super2.calculatePrice());

const cellar = new Cellar();
cellar.addbeers(beer1)
cellar.addbeers(beer2)
cellar.addbeers(beer3)
cellar.addbeers(beer4)
cellar.addwines(wine1)
cellar.addwines(wine2)
cellar.addwines(wine3)
cellar.addwines(wine4)
cellar.addsuperalcs(super1)
cellar.addsuperalcs(super2)
cellar.addsuperalcs(super3)
cellar.addsuperalcs(super4)


console.log(cellar.finditembyname("Rum"));
console.log(cellar.finditembyname("Pino"));
console.log(cellar.finditembycode(wine2.uniqueCode));
console.log(cellar.finditembygrape("vermentino"));

beer1.addquantity(2)
beer1.removequantity(24)

console.log(cellar);