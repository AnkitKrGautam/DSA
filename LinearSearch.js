// console.log("They say who is best, it's me I guess")

function LinearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value.trim()) return i;
  }
  return -1;
}

LinearSearch(["ankit", "ayush", "ravindar", "rahul", "abhishek"], "ankit ");
