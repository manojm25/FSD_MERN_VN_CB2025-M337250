let numbers = [10, 25, 7, 40, 18];

let sum = 0;
let largest = numbers[0];

// Calculate sum and largest number
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];

  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Sum:", sum);
console.log("Largest number:", largest);
