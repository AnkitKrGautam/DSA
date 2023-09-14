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

function same_refactor(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }

    let frequencyCouter1 = {}
    let frequencyCouter2 = {}

    for (let val of arr1){
        console.log("-- val --", val)
        frequencyCouter1[val] = (frequencyCouter1[val] || 0) + 1
    }
    console.log("frequencyCouter1 -- ", frequencyCouter1)
    for (let val of arr2){
        console.log("-- val --", val)
        frequencyCouter2[val] = (frequencyCouter2[val] || 0) + 1
    }
    console.log("frequencyCouter2 -- ", frequencyCouter2)
    for (let key in frequencyCouter1) {
        if(!( key ** 2 in frequencyCouter2 )){ //to check the key which is actual value of arr each value in arr1 should have its squared present in arr2
            return false
        }
        if(frequencyCouter2[key**2] !== frequencyCouter1[key]){ // here we check the occurace by comparing the value of object to check it is repeated same time
            return false
        }
        
    }
    return true
}

// same([1,2,3, 2],[4,4,1,9])
// same_refactor([1,2,3, 2],[4,1,9,4])


function same_version(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCouter1 = {}
    let frequencyCouter2 = {}
    for(let val of arr1){
        console.log("val -- ", val)
        frequencyCouter1[val] = (frequencyCouter1[val] || 0) + 1
    }
    for(let val of arr2) {
        console.log("val -- ", val)
        frequencyCouter2[val] = (frequencyCouter2[val] || 0) + 1
    }
    console.log( "frequencyCouter1 === ", frequencyCouter1)
    console.log("frequencyCouter2 === ", frequencyCouter2)
    for(let key in frequencyCouter1){
        if(! (key**2 in frequencyCouter2)){
            return false
        }
        if(frequencyCouter1[key] !== frequencyCouter2[key**2]){
            return false
        }
    }
    return true
}

// same_version([1,2,3, 2],[4,1,9,4])


function same_version2(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    let freq1 = {}
    let freq2 = {}
    for(let val of arr1) {
        freq1[val]= (freq1[val] || 0)+1
    }
    for(let val of arr2) {
        freq2[val]= (freq2[val] || 0)+1
    }
    console.log(freq1)
    console.log(freq2)
    for(let key in freq1){
        if(!(key**2 in freq2)){
           return false
        }
        if(freq1[key] !== freq2[key**2]){
            return false
        }
        
    }
    return true
}

// console.log(same_version2([1,2,3, 2, 5],[4,1,9,4, 25 ]))


function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// console.log(validAnagram('cinema', 'iceman'))


function validAnagram1 (first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for(let i = 0; i< first.length; i++) {
    let letter = first[i]
    //if letter exists then increment otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter]= 1

    console.log("letter  ", letter)
  }

  for (let i=0; i< second.length; i++) {
    let letter = second[i]
    // lookup[letter] ? lookup[letter] -= 1 : false   // here the condition which we provide is correct but it can't return that's why we have to use if else statement
     if(!lookup[letter]){
      return false
    } else {
      lookup[letter] -= 1 
    }  
  }
    console.log("lookup  ", lookup)

  return true
}

// console.log(validAnagram1("cinema", "iceman"))


function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false
  }

  let lookup = {}
  for(let i=0; i< first.length; i++) {
    let letter = first[i]
    lookup[letter] ? lookup[letter] +=1  : lookup[letter] = 1 
  }
  console.log( "lookup first -- ", lookup)
  for(let i=0; i<second.length; i++ ){
    let letter = second[i]
    if(!lookup[letter]){
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  console.log( "lookup last -- ", lookup)
  return true
}

console.log(validAnagram2("cinema", "iceman"))