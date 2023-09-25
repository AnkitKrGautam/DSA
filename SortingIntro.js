//this is the only case where sort() performs best
console.log(["Ankit", "Ravi", "Brad", "zebra", "Gopal"].sort()); //works super fine due to capital letters

// if there is any string starting with small letters then it won't work properly
console.log(["Ankit", "Ravi", "Brad", "zebra", "Gopal", "amit"].sort()); // won't work properly because of small character Ankit

function compararer(num1, num2) {
  return num1 - num2;
}

//ascending number
console.log([10, 15, 3, 4, 2].sort(compararer));

//descending number
const sortedArray = [10, 15, 3, 4, 2].sort((a, b) => b - a);
console.log(sortedArray); // [2, 3, 4, 10, 15]

// for string length comparator
console.log(
  ["Ankit", "Ravi", "Brad", "zebra", "Gopal", "amit"].sort(
    (a, b) => a.length - b.length
  )
);
