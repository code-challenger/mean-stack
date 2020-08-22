class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;

        this.getSpeed = function(){
            return speed;
        }

        this.getStrength = function(){
            return strength;
        }
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`This Ninja's health is ${this.health}, speed is at ${this.getSpeed()}, and strength is at ${this.getStrength()}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`This Ninja drank Sake, it's health is now ${this.health}`);
    }
     
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        var speed = 10;
        var strength = 10;
        var wisdom = 10;

        this.getWisdom = function(){
            return wisdom;
        }
    }

    speakWidsom(){
        // this.health += 10;
        let drink = super.drinkSake();
        let message = "Not so wise";
        console.log(drink);
        console.log(message);
        console.log(this.health);
    }
}

let ninja1 = new Ninja("Krista");
console.log(ninja1);
console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());

let sensei = new Sensei("KristaAnn");
sensei.speakWidsom();
sensei.showStats();

