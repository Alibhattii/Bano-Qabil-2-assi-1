// 1) Write a program that checks whether a number is even or odd.
let number = 8;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 2) 2) If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible"
let age = 21;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// 3) Print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 4) 4) Print even numbers between 1 to 20 using a while loop.
let n = 1;
while (n <= 20) {
  if (n % 2 === 0) {
    console.log(n);
  }
  n++;
}



// 6) Write a function that adds two numbers and returns the result.

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// 7) Write a function that returns the factorial of a number.

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(4));


// 9) Access the properties of the student object using dot and bracket notation.

let student = {
  name: "Ali",
  rollNo: 101,
  marks: 90,
  isPassed: true
};

// 10) Access object values
console.log(student.name);      // Dot
console.log(student["marks"]); // Bracket

// 11) Add a method to student
student.sayHello = function () {
  console.log("Hello, I am " + this.name);
};
student.sayHello();

// 12) Print keys and values of an object
function showObject(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
}
showObject(student);

// 13) Favorite fruits
let fruits = ["apple", "banana", "mango"];

// 14) Add fruit
fruits.push("grape");

// 15) Remove last fruit
fruits.pop();

// 16) Check if banana is there
console.log(fruits.includes("banana"));

// 17) Multiply all numbers by 2
let numbers = [1, 2, 3];
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);

// 18) Get only ages 18 or more
let ages = [12, 20, 17, 18];
let adults = ages.filter(function (a) {
  return a >= 18;
});
console.log(adults);

// 19) First number > 10
let list = [3, 8, 12, 5];
let first = list.find(function (n) {
  return n > 10;
});
console.log(first);

// 20) Print names
let names = ["Ali", "Zara", "Umar"];
names.forEach(function (name) {
  console.log(name);
});

// 21) Get student names
let students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 }
];
let studentNames = students.map(function (s) {
  return s.name;
});
console.log(studentNames);

// 22) Students with marks > 50
let passed = students.filter(function (s) {
  return s.marks > 50;
});
console.log(passed);

// 23) Find student named Zara
let found = students.find(function (s) {
  return s.name === "Zara";
});
console.log(found);

// 24) Print each student
students.forEach(function (s) {
  console.log(s.name + ": " + s.marks);
});

// 25) Square each number
let nums = [2, 4, 6, 8];
let squared = nums.map(function (n) {
  return n * n;
});
console.log(squared);

// 26) Print names one by one
let people = ["Ali", "Zara", "Umar", "Ahmed"];
people.forEach(function (p) {
  console.log(p);
});

// 27) Ages above 18
let allAges = [12, 25, 17, 20, 16, 30];
let over18 = allAges.filter(function (a) {
  return a > 18;
});
console.log(over18);

// 28) Check if apple is in the list
let fruitList = ["banana", "mango", "grapes", "apple"];
console.log(fruitList.includes("apple"));

// 29) First student > 90 marks
let top = [
  { name: "Ali", marks: 75 },
  { name: "Zara", marks: 92 },
  { name: "Umar", marks: 85 }
].find(function (s) {
  return s.marks > 90;
});
console.log(top);

// 30) Total sum of array
let amounts = [200, 150, 300, 100];
let total = amounts.reduce(function (sum, value) {
  return sum + value;
}, 0);
console.log(total);

// 31) Get usernames
let users = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" }
];
let usernames = users.map(function (u) {
  return u.username;
});
console.log(usernames);

// 32) Only odd numbers
let allNumbers = [1, 2, 3, 4, 5, 6];
let odds = allNumbers.filter(function (n) {
  return n % 2 !== 0;
});
console.log(odds);

// 33) Count vowels in "javascript"
let word1 = "javascript";
let vowelCount = word1.match(/[aeiou]/gi).length;
console.log(vowelCount);

// 34) Print task and status
let tasks = [
  { task: "Assignment", completed: true },
  { task: "Homework", completed: false }
];
tasks.forEach(function (t) {
  console.log("Task: " + t.task + " - Status: " + (t.completed ? "Completed" : "Incomplete"));
});

// 35) Add "status: active" to employees
let employees = [
  { name: "Ali" },
  { name: "Zara" }
];
let updated = employees.map(function (e) {
  return { ...e, status: "active" };
});
console.log(updated);