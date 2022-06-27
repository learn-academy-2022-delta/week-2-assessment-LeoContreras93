// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
// console.log(cohort.split(""))

// a) Your answer: will split string into an array of substrings.
// b) Verify and explain:['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '2'] converted the string into a new array of each individual letter into sub strings within the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined due to name not being assigned a value
// b) Verify and explain: undefined, name is being used in string interpolation, however javascript knows about name but there is no value assigned to it.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: should multiply ever element in the array by 2
// b) Verify and explain: var multBy2  is an array built into a high order function, .map is a built in method that iterates over the length of the array and returns a new array with each individual element multiplied by two.  [8, 10, 12, 14, 16]


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: return a new array with only odd numbers.
// b) Verify and explain: var onlyOdds is the delcared array with a high order function using a built in method that iterates over the array the built in method used is .filter which filters out what you don't need and keeps what you do want in the new array. modulo is used to find the remainder


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: var myCodingSkills has other variables assigned with arrays as values. console.log is invoking myCodingSkills with an index of 0, zero based index count starts from 0-10...starting with the first element in the  languages array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn {student: 'George', cohort: 'Bravo', year: 2022}
// b) Verify and explain: THIS is referencing the object name inside the object. var learnStudent is a new variable being declared and assigned Learn. new is a keyword that creates a new instance of the object. 
