const output = document.getElementById("output"); //returns <div id="root""></div> or returns null

console.log("1 Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)");
const problem1Section = document.createElement("div");
const nums = [];

for (let i = 1; i <= 20; i++) {
  nums.push(i);
}

problem1Section.innerHTML = nums;

output.appendChild(problem1Section);

console.log("2 Display the even numbers from 1 to 20. (1, 2, 4, …, 18, 20)");

const problem2Section = document.createElement("div");
const nums2 = [];

for (let i =2; i <= 20; i++) {
    if(i%2===0){
        nums2.push(i);
    }
}

problem2Section.innerHTML = nums2;

output.appendChild(problem2Section);

console.log("3 Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)");

console.log("4 Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)");

console.log("5 Display the square numbers up to 100. (1, 4, 9, …, 81, 100)");

console.log(
  "6 Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)"
);

console.log(
  "7 Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2"
);

console.log(
  "8 Display the even numbers counting backwards from 20. (20, 18, 16, …, 4, 2)"
);

console.log(
  "9 Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)"
);

console.log(
  "10 Display the multiples of 5, counting down from 100. (100, 95, 90, …, 10, 5)"
);

console.log("Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)");
