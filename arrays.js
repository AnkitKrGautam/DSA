const employees = ["Ravindar", "Ankit","Rohit", "Amit" ]

employees.push("Rahul", "Rana")

console.log("push -- ", employees)

employees.pop()

console.log("pop -- ", employees)

employees.shift()

console.log("shift -- ", employees)

employees.unshift("Kamal", "Kamlesh")

console.log("employees after sort -- ", employees.sort()) //we can easily sort array of string using sort method


console.log("unshift -- ", employees)

const a = [1,2,3,4]
const b = [11,12,13,14]

const c = a.concat(b)

console.log("concat c -- ", c)

console.log("slice -- ", c.slice(4,7))

console.log("concat c after slice -- ", c) // [1, 2, 3, 4, 11, 12, 13, 14]

console.log("splice adding -- ", c.splice(2, 0, 15, 16)) //  will return emply array []

console.log("c after splice -- ", c) //[1, 2, 15, 16, 3, 4, 11, 12, 13, 14]


console.log("splice deleting -- ", c.splice(0, 3))// will only return what it is deleting  [1, 2, 15]

console.log("c after splice -- ", c) //[16, 3, 4, 11, 12, 13, 14]

// For sorting the array of number we need to do something like this

c.sort((a,b) => a - b)

console.log("c after numerical sort -- ", c)

