// Write a program that takes marks (0–100) and prints the grade 
// (A/B/C/F). Also take an age input and use a ternary operator to print 
// “Adult” or “Minor”. 

let marks = 78;   // 0 – 100
let age = 19;     // age input

// Grade calculation
if (marks >= 90 && marks <= 100) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Age check using ternary operator
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
