function addUptoN (n) {
    let total = 0
    for (let i=0; i<= n; i++ ){
        total += i;
    }
    return total
}

var t1 = performance.now()

console.log("1st - ", addUptoN(1000000000))

var t2 = performance.now()


console.log("time difference 1 - ", (t2-t1)/ 1000 , "s")


function addAnotherN (n) {
    let sum  = n * (n+1)/2;
    
    return sum
    
}
var t3 = performance.now()


console.log("2nd - ", addAnotherN(1000000000))

var t4 = performance.now()

console.log("time difference 2 - ", (t4-t3)/ 1000 , "s")