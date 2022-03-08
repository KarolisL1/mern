class Card {
    constructor( name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor( name, cost, power, res){
        super( name, cost);
        this.power = power;
        this.res = res;
    }
    attack ( target ){
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor( name, cost, text, target){
        super( name, cost);
        this.text = text;
        this.target = target;

        if(magnitude >0){
            this.text = "increase... "
        }
    }
    }

let u1 = new Unit(3,);
let u2 = new Unit();

u1.attack("potato")
