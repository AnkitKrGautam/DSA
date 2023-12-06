




// Reversing ----------------------------------------------------------

reverseWords('The quick brown fox jumps over the lazy dog.')
// output: 'ehT kciuq nworb xof spmuj revo eht yzal .god'


function  reverseWords (line) {
    const reverseLine = line.split(" ").map((word)=> word.split("").reverse().join("")).join(" ")
    return reverseLine
}

reverseWord('quick')

function  reverseWord (word) {
    const reverseLine = word.split("").reverse().join("")
    return reverseLine
}

//Sorting ----------------------------------------------------------
const numberArr = [10,21,23,4,5,3,2,4];

const shortedArr = numberArr.sort((a,b)=>a-b ) //will produce old array with shorted value

console.log("numberArr- ", numberArr)
console.log("shortedArr- ", shortedArr)

const numberArr2 = [10,21,23,4,5,3,2,4];

const shortedArr2 = numberArr2.slice().sort((a,b)=>a-b ) //will produce new array with sorted value

console.log("numberArr2- ", numberArr2)
console.log("shortedArr2- ", shortedArr2)


const letters = ["g","a", "s", "t","r"]

const shortedLetters = letters.slice().sort()

console.log("shortedLetters- ", shortedLetters, letters)

// Searching ----------------------------------------------------------

findletterInArray(["red", "notice", "orange","banana"], "orange")

function findletterInArray (array, findLetter) {

    const found = array.indexOf(findLetter)
    if(found >= 0){
        console.log("found", found+1, array[found])
    } else {
        console.log("not found")
    }
}

findNumberInArray([6,2,311,2222,243, 31], 31) 

function findNumberInArray(array, findNumber) {
    const found = array.indexOf(findNumber)
    if(found >= 0){
        console.log("found", found+1)
    } else {
        console.log("not found")
    }
}

//-------------------------------------------------------------------------------




