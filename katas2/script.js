function add(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

// Test

console.log(
  "Tests add function with numbers 2 and 4. Actual value is: ",
  add(2, 4)
); // returns 6

function mult(number1, number2) {
  let sum = 0;

  for (let i = 0; i < number2; i++) {
    sum = add(sum, number1);
  }

  return sum;
}

// Test
console.log(
  "Tests mult function with numbers 6 and 8. Actual value is: ",
  mult(6, 8)
); // 48

function powers(x, n) {
  let total = 1;
  // edge case: n = 0;
  if (n === 0) {
    return 1;
  }
  // edge case: n = 1;
  if (n === 1) {
    return x;
  }

  for (let i = 0; i <= n; i++) {
    total = mult(total, x);
  }

  return total;
}

// Test
console.log(powers(100, 0)); // 1
console.log(powers(1, 0)); // 1
console.log(powers(1, 1)); // 1
console.log(powers(2, 2)); // 4
console.log(powers(3, 3)); // 36

/*
 if f=3
 1*2*3
 return 6

 if f=7
 1 * 2 * 3 * 4 * 5 * 6 * 7
 return 5040
*/

function fact(f) {
  let total = 0;

  for (let i = 1; i <= f; i+=2) {
    total = mult(i - 1, i);
  }

  return total;
}
// Test
console.log("fact: ", fact(4));
console.log("fact: ", fact(7));
5040;

function fib(v) {}
// Test
// console.log(fib(8));
