function BinarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let finder = Math.floor((left + right) / 2);
  console.log("ddd", left, right, finder);

  while (left < right && arr[finder] !== value) {
    if (value > arr[finder]) {
      left = finder + 1;
    } else {
      right = finder - 1;
    }
    finder = Math.floor((left + right) / 2);
  }

  if (arr[finder] === value) return finder;

  return -1;
}

// BinarySearch([1,4,5,8,12,14,17,19,21,23,26,34,56,78], 21)

function BinarySearchRefactor(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let finder = Math.floor((left + right) / 2);

  while (left < right && arr[finder] !== value) {
    if (value > arr[finder]) {
      left = finder + 1;
    } else {
      right = finder - 1;
    }
    finder = Math.floor((left + right) / 2);
  }

  return arr[finder] === value ? finder : -1;
}

console.log(
  "Binary search",
  BinarySearchRefactor([1, 4, 5, 8, 12, 14, 17, 19, 21, 23, 26, 34, 56, 78], 19)
);
