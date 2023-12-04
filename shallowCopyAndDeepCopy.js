const originalObject = {
    name: "Ankit",
    age: 27
}

const shallowCopy = originalObject;
const hardCopy = {...originalObject}
const hardCopy2 = Object.assign({}, originalObject);

shallowCopy.name = "Abhi"

console.log("originalObject - ", originalObject)
console.log("shallowCopy - ", shallowCopy)
console.log("hardCopy - ", hardCopy)
console.log("hardCopy2 - ", hardCopy2)

// Deep Copy Array -----------------------------------------------------

// method 1: parse followed by stringify ------------------------

const originalArray = [1, 2, [3, 4], { key: 'value' }];

// Create a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originalArray))

// Modify the deep copy without affecting the original array
deepCopy[2][0] = 99;
deepCopy[3].key = 'updatedValue';

console.log(originalArray); // Output: [1, 2, [3, 4], { key: 'value' }]
console.log(deepCopy);      // Output: [1, 2, [99, 4], { key: 'updatedValue' }]

// method 2: concat ------------------------

const originalArr = [1,2,3,4,5,6]

const hardCopyArr = [].concat(originalArr);

hardCopyArr[0] = 99;

console.log("originalArr -- ", originalArr)
console.log("hardCopyArr -- ", hardCopyArr)

// method 3: Array.from ------------------------

const originalArr3 = [1,2,3,4,5,6]

const hardCopyArr3 = Array.from(originalArr3);

hardCopyArr3[0] = 99;

console.log("originalArr3 -- ", originalArr3)
console.log("hardCopyArr3 -- ", hardCopyArr3)


// method 4: Spread Operator ------------------------

const originalArr4 = [1,2,3,4,5]
const hardCopyArr4 = [...originalArr4]

hardCopyArr4[0] =  99;

console.log("originalArr4 -- ", originalArr4)
console.log("hardCopyArr4 -- ", hardCopyArr4)


// method 5: slice method ------------------------
const originalArr5 = [1,2,3,4,5]
const hardCopyArr5 = originalArr5.slice();

hardCopyArr5[0] =  99;

console.log("originalArr5 -- ", originalArr5)
console.log("hardCopyArr5 -- ", hardCopyArr5)


// Soft Copy Array -----------------------------------------------------
const originalArr2 = [1,2,3,4,5,6]

const shallowCopyArr = originalArr;

shallowCopyArr[0] = 99;


console.log("originalArr -- ", originalArr)
console.log("shallowCopyArr -- ", shallowCopyArr)









