function sumZero (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
          if(arr[i]+ arr[j] === 0){
              return [arr[i], arr[j]]
          }  
        }
    }
    return undefined
    
}
// sumZero([-3,-2,-1,0,1,2,3])

function sumZeroRefactor (arr) {
    let left = 0
    let right = arr.length - 1
    while ( left < right) {
        if (arr[left] + arr[right] ===0 ){
            return [arr[left], arr[right]]
        }else if (arr[left] + arr[right] < 0){
            left++
        } else {
            right --
        }
        
    }

}

// sumZeroRefactor([-5,-4,-3,-2,-1,0,1,2,3, 4])


function countUniqueValues (arr) {
    if (arr.length === 0) {
        return 0
    }
    let i=0
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i+1
}

// countUniqueValues([])
// countUniqueValues([1,2,3,4,5,5,5,5,5,5])

