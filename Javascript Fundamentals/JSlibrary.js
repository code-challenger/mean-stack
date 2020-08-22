var _ = {
   map: function(arr, callback) {
     for(var i = 0; i< arr.length; i++){
         arr[i] = callback(arr[i]);
     }
     return arr;
   },
   reduce: function(arr, callback, sum) { 
     var result = sum;
     for(var i = 0; i < arr.length; i++){
         result += callback(sum, arr[i]);
     }
     return result;
   },
   find: function(arr, callback) {   
     for(var i = 0; i < arr.length; i++){
         if(callback(arr[i])){
             return arr[i];
         }
     }
     return false;
   },
   filter: function(arr, callback) { 
     var newArr = [];
     for(var i = 0; i < arr.length; i++){
         if(callback(arr[i])){
             newArr.push(arr[i]);
         }
     }
     return newArr;
   },
   reject: function(arr, callback) { 
     var newArr = [];
     for(var i = 0; i < arr.length; i++){
         if(!callback(arr[i])){
             newArr.push(arr[i]);
         }
     }
     return newArr;
   }
 }
// you just created a library with 5 methods!




//For Map:
console.log( _.map([1,2,3], function(num){return num * 3; }));

//For Reduce:
console.log( _.reduce([1,2,3], function(memo, num){return memo + num;}, 0));

//For Find
console.log( _.find([1,2,3,4,5,6], function(num){return num % 2 == 0;}));

//For Filter
console.log( _.filter([1,2,3,4,5,6], function(num){return num % 2 == 0; }));

//For Reject
console.log(_.reject([1,2,3,4,5,6], function(num){return num % 2 == 0; }));
