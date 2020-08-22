function fib(){
    var first = 0;
    var second = 1;

    function nacci(){
        console.log(second);
        var num = first;
        first = second;
        second = second + num;
    }
    return nacci
}

var fibCounter = fib();

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"