//2.

//Array of numbers 1 through 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Odd numbers
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    console.log(numbers[i]);
  }
}

// NUmbers that are divisible by 2 or 5
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0 && i % 5 === 0) {
    console.log(numbers[i]);
  }
}

// Square of numbers that are divisible by 3
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i]**2);
  }
}
//Sum of the square of all numbers divisible by 5
let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 5 === 0) {
    sum += i ** 2;
  }
};




