// this is naive solution
function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (max < temp) {
      max = temp;
    }
  }
  return max;
}

// console.log("max sum --- ", maxSubarraySum([1,2,3,4,2,8,1,5],3))

//sliding window approach is first we take sum to window and then we just subract first number and add then next number to the window
function maxSubarraySumRefactor(arr, num) {
  if (arr.length < num) return null;

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(
  "max sum --- ",
  maxSubarraySumRefactor([2, 6, 15, 2, 1, 128, 5, 6, 3], 3)
);
