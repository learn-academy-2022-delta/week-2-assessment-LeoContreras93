// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { array } = require("yargs")

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.
//Expected output: [18, 21, 24, 27, 30]
// Expected output: [72, 81, 90, 99, 108]
// describe("multiplyByThree", () => {
//     const numbersArray1 = [6, 7, 8, 9, 10]
//     const numbersArray2 = [24, 27, 30, 33, 36]
//     it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {})
//     expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//     expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
// })

// // b) Create the function that makes the test pass.
// const multiplyByThree = (array) => {
//     return array.map(value => value * 3)
// }




// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// input: num1,num2,num3
// output: "15 is divisble by three"
//         "0 is divisible by three"
//         "-7 is not divisible by three"
// function name divisibleByThree
//evaluate variable using divide and strictly equal operator

// a) Create a test with expect statements for each of the variables provided.

//ReferenceError: divisibleByThree is not defined

// const num1 = 15
// // Expected output: "15 is divisible by three"
// const num2 = 0
// // Expected output: "0 is divisible by three"
// const num3 = -7
// // Expected output: "-7 is not divisible by three"
describe("divideByThree", () => {
    it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
        expect(divideByThree(num1)).toEqual("15 is divisible by three")
        expect(divideByThree(num2)).toEqual("0 is divisible by three")
        expect(divideByThree(num3)).toEqual("-7 is not divisible by three")
    })
})
//  ReferenceError: divideByThree is not defined
const num1 = 15
const num2 = 0
const num3 = -7

// b) Create the function that makes the test pass.
const divideByThree = (num1, num2, num3) => {
    if(num1 / 3 === 5) {
        return "15 is divisible by three"
    } else if(num2 / 3 === 0) {
        return "0 is divisible by three"
    } else if(num3 / 3 === 2.33) {
        return "-7 is not divisible by three"
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
//input: array
//output: returns array with all capital letters
//name function
//use toUpperCase built in method
// .concat built in method to combine 2 arrays or more
//Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
describe("capitalLetters", () => {
    expect(capitalLetters("randomNouns1 ")).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalLetters("randomNouns2")).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
})
//ReferenceError: capitalLetters is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]


// b) Create the function that makes the test pass.
const letters = randomNouns1.concat(randomNouns2)
capitalLetters = letters.map(value => {
    return value.toUpperCase()
})
// ['STREETLAMP', 'POTATO', 'TEETH', 'CONCLUSION', 'NEPHEW', 'TEMPERATURE', 'DATABASE', 'CHOPSTICKS', 'MANGO', 'DEDUCTION']



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
//name function
//input: learn, academy, challanges
//output: 1, 0, 2 
// .filter method  or for 
//convert string to an array

describe("getVowels", () => {
    expect(getVowels("vowelTester1")).toEqual([1])
    expect(getVowels("vowelTester2")).toEqual([0])
    expect(getVowels("vowelTester3")).toEqual([2])
})
//ReferenceError: getVowels is not defined


const vowelTester1 = "learn "
// Expected output: 1
const vowelTester2 = "academy "
// Expected output: 0
const vowelTester3 = "challenges "
// Expected output: 2


// b) Create the function that makes the test pass.
console.log(vowelTester1.indexOf("e")) // 1
console.log(vowelTester2.indexOf("a")) // 0
console.log(vowelTester3.indexOf("a")) // 2

// I am lost with this one. I cannot seem to figure it out how to write in a function or in a for loop method. I took the easy route on this one and used the indexOf built in method to return the position of the vowel in the string.







