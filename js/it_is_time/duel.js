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
    }
    }
