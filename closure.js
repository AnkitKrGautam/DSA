// Closure in javascript is lexical scoping used to preserve variales from the outer scope of a function in the inner scope of a function.

// Lexical environment === surrounding local environment

// Everything need to be closed in box before feed into the v8 machine

// function pureFun(a,b) {   // Not a closure
// return a+b
// }

// let v = 3
// function impureFun(a) {   // this is a closure
// return a+b
// }


for (var i = 0; i < 3; i++) {
    const log = () => {
        console.log(i)
    }
    setTimeout(log, 100)
}

// o/p: 3,3,3 due to closure property