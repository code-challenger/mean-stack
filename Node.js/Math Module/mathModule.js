module.exports = function (){
  return {
    add: function(num1, num2) { 
         console.log("the sum is:", num1 + num2);
    },
    multiply: function(num1, num2) {
         console.log("the multiplication reuslt is:", num1 * num2);
    },
    square: function(num) {
         console.log("The square of the number is:", num*num); 
    },
    random: function(num1, num2) {
        var min;
        var max;
        if(num1 < num2){
            min = num1;
            max = num2;
        }
        else{
            min = num2;
            max = num1;
        }
        var random = Math.floor(Math.random() * (max - min)) + min;
         console.log("A random number between " + num1 + " and " + num2 + " is " + random );
    }
  }
};
