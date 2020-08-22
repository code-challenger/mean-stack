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

var ninja1 = new Ninja("Krista");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

