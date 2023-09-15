//naive solution

function same (arr1, arr2) {
  if(arr1.length !== arr2.length) {
      return false
  }
  for (let i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if (correctIndex === -1) {
          return false
      }
      console.log("arr1 -- ", arr1[i])
      console.log("arr2 -- ", arr2)
      arr2.splice(correctIndex, 1)
  }
  return true
}

// same([1,2,3, 2, 5],[4,1,9,4, 25 ])

function sameArray(arr1, arr2) {
if(arr1.length !== arr2.length) {
  return false
}
let freq1 = {}
let freq2 = {}

for(let val of arr1 ){
  freq1[val] = (freq1[val] || 0) + 1
}

for(let val of arr2 ){
  freq2[val] = (freq2[val] || 0) + 1
}

for(let key in freq1){
  if(!(key**2 in freq2)) {
    return false
  }
  if(freq1[key] !== freq2[key**2]){
    return false
  }
} 

console.log("freq2 -- ", freq2)
return true

}

// sameArray([1,2,3, 2, 5],[4,1,9,4, 25 ])

function anagramValidation(first, second){
if(first.length !== second.length) {
  return false
}
let lookup = {}
for(let i=0; i<first.length ; i++) {    
   let letter = first[i]   
  lookup[letter] ? lookup[letter] += 1 :  lookup[letter] = 1 
}
for(let i = 0; i< second.length; i++) {
  let letter = second[i];
  if(!lookup[letter]) {
    return false
  } else {
    lookup[letter] -= 1
  }
}
return true 
}

// anagramValidation("cinema", "iceman")


