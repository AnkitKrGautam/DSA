function takeShower() {
  return "Showering"
}

function eatBreakfast() {
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood() {
  let item =["oatmeal", "Eggs", "Protein Shake"]
  return item[Math.floor(Math.random() * item.length)]
}

function wakeup() {
  takeShower()
  eatBreakfast()
  console.log("ok ready to go to work")
}

// wakeup()


function countDownRecursive(num) {
  console.log("-", num);
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  num--;
  countDownRecursive(num);
}
// countDownRecursive(3)

function countDownIterative(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

// countDownIterative(3)

function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

sumRange(8);

//factorial_iterative

function factorial_iterative(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

// factorial_iterative(6)

//factorial_recursive

function factorial_recursive(num) {
  if (num === 1) return 1;
  return num * factorial_recursive(num - 1);
}

// factorial_recursive(5)

// get all the odd number from an array

function collectOdds(arr) {
  let result = [];

  function helper(helperArr) {
    if (helperArr.length === 0) {
      return;
    }
    if (helperArr[0] % 2 !== 0) {
      result.push(helperArr[0]);
    }
    helper(helperArr.slice(1));
  }
  helper(arr);
  return result;
}

console.log(
  "collectOdds([1,2,3,4,5,6,7,8,9]) -- ",
  collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])
);

//Pure Recursion
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

console.log(
  "collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) ==> ",
  collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
);
