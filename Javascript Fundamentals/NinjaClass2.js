function Ninja(ninja_name){
    this.name = ninja_name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.getSpeed = function(){
        return speed;
    };

    this.getStrength = function(){
        return strength;
    };
}

Ninja.prototype.sayName = function(){
    console.log("My name is " + this.name);
};

Ninja.prototype.showStats = function(){
    console.log("Ninja health is " + this.health + ". Ninja speed is " + this.getSpeed() + ". Ninja strength is " + this.getStrength());
};

Ninja.prototype.drinkSake = function(){
    this.health += 10;
    console.log("+10 added to health, current health is " + this.health);
};

Ninja.prototype.punch = function(Ninja){
        Ninja.health -= 5;
        console.log(Ninja.name + " was punched by " + this.name);
};

Ninja.prototype.kick = function(Ninja){
    var deduct = (Ninja.health - (this.getStrength() * 15));
    Ninja.health = deduct;
    console.log(Ninja.name + " was kicked by " + this.name + " and his health is now " + Ninja.health);
};

var ninja1 = new Ninja("Krista");
var ninja2 = new Ninja("Dave");

ninja1.punch(ninja2);

// ninja1 instanceof Ninja;



