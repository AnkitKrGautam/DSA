let instructor = {
  firstName: "Ankit",
  isInstructor: true,
  favouitePlayers: ["Dhoni", "Virat", "Sachin", "Jadeja"],
};

// console.log(Object.keys(instructor));
// console.log(Object.values(instructor));
// console.log(Object.values(instructor).length);
// console.log("to get the lenght -  ", Object.keys(instructor || {}).length);
// console.log(Object.entries(instructor)) // this will print all the values in the object but in array format. It converts the objects into an array of key value pairs and prints all the information.

// assigning new key value pair to the Object

// 1. Using Property Accessors

instructor.lastName = "Gautam";

// 2. Using spread (...) Syntax

instructor = { ...instructor, middleName: "Kumar" };

// 3. Using Object.assign()

Object.assign(instructor, { city: "Dehradun" });

// 4. Using Object.defineProperty()
// set property descriptors such as enumerable, configurable, and writable.

Object.defineProperty(instructor, "age", {
  value: "27",
  enumerable: true,
  configurable: true,
  writable: false,
});

// console.log("instructor-- ", instructor);

function printAllPairsInArrayOfString(n) {
  var pair = [];
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      pair.push(i + "" + j);
    }
  }
  return pair;
}

// console.log(printAllPairsInArrayOfString(5));

function printAllPairsInArrayOfObject(n) {
  var pair = {};
  for (var i = 1; i <= n; i++) {
    pair[i] = {};
    for (var j = 1; j <= n; j++) {
      pair[i][j] = { i: i, j: j };
    }
  }
  return pair;
}

// console.log(printAllPairsInArrayOfObject(5));

console.log(instructor.hasOwnProperty("firstName"))