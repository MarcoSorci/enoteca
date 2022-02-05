class Cellar {
    constructor() {
        this.beers = []
        this.wines = []
        this.superalcs = []
    }

    addbeers(beertoadd) {
        for (const beer of this.beers) {
            if (beer === beertoadd) {
                console.log("This item is already in the database");
                return
            }
        } this.beers.push(beertoadd)
    }

    addwines(winetoadd) {
        for (const wine of this.wines) {
            if (wine === winetoadd) {
                console.log("This item is already in the database");
                return
            }
        } this.wines.push(winetoadd)
    }

    addsuperalcs(superalctoadd) {
        for (const superalc of this.superalcs) {
            if (superalc === superalctoadd) {
                console.log("This item is already in the database");
                return
            }
        } this.superalcs.push(superalctoadd)
    }

    finditembyname(nametosearch) {
        let array = [...this.beers, ...this.wines, ...this.superalcs]
        return array.filter(x => x.name.toLowerCase() === nametosearch.toLowerCase())
    }

    finditembycode(codetosearch) {
        let array = [...this.beers, ...this.wines, ...this.superalcs]
        return array.find(x => x.generatecode() === codetosearch)    //.filter finds multiples, .find finds only the first
    }

    finditembygrape(variety) {
        let array = [...this.wines]
        return array.find(x => x.grapeVariety.toLowerCase() === variety.toLowerCase())
    }

    addquantitybycode(codetosearch, number) {
        return this.finditembycode(codetosearch).quantity += number
    }

    removequantitybycode(codetosearch, number) {
        if (this.finditembycode(codetosearch).quantity >= number) {
            return this.finditembycode(codetosearch).quantity -= number
        } else {
            return "Not enough bottles."
        }
    }

    findquantitybycode(codetosearch) {
        return this.finditembycode(codetosearch).quantity
    }

    findquantitybygrape(varietytofind) {
        return this.finditembygrape(varietytofind).quantity    //not summing quantities
    }

    findquantitybyyear(yeartosearch) {
        let array = [...this.wines]
        return array.filter(x => x.bottleYear === yeartosearch)       //not summing quantities
    }

    findbeerbytype(type) {
        let array = [...this.beers]
        return array.find(x => x.beerType.toLowerCase() === type.toLowerCase())  //issue with find and filter
    }

    findbeerquantitybytype(type){
        return this.findbeerbytype(type).quantity   //not summing quantities
    }



    getquantitytotal() {
        let sum = [...this.beers].quantity + [...this.wines].quantity + [...this.superalcs].quantity
        return sum  //not summing quantities
    }


}
