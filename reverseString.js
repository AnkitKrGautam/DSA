// output: 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

function reverseWords(str) {
  var reverseStringArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  return reverseStringArr;
}

// output: 'dog. lazy the over jumps fox brown quick The'
// console.log(reverseLine("The quick brown fox jumps over the lazy dog."));

function reverseLine(str) {
  var reveredLineArr = str.split(" ").reverse().join(" ");
  return reveredLineArr;
}

// console.log(reverseWords("Jumps"));
// output: 'spmuJ'

function reverseWords(str) {
  var reverseWordsArr = str.split("").reverse().join("");
  return reverseWordsArr;
}

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// printAllPairs(6)

function logAtMost(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
// logAtMost(120)

function onlyElementAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

// console.log(onlyElementAtEvenIndex([1, 2, 3, 4, 5, 6, 7, 8, 32, 42, 452, 555]));

function printAllPairsInArrayOfString(n) {
  var pair = [];
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      pair.push(i + "" + j);
    }
  }
  return pair;
}

console.log(printAllPairsInArrayOfString(5));
