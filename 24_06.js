// Question 1:-Use nested loops to print the following pattern:

// 11
// 12
// 21
// 22
for(let i=1;i<=2;i++){
    for(let j=1;j<=2;j++){
        console.log(i,""+j)
    }
}


// Question 2:-Use nested loops to print:

// 111
// 222
// 333

for(let i=1;i<=3;i++){
    let pattern="";
    for(let j=1;j<=3;j++){
       pattern+=i;
    }
    console.log(pattern)
}

// Find the smallest number from the array using nested loops.

let numbers = [45, 12, 78, 23, 9, 56];
let smallest=numbers[0]
for(let i=0;i<numbers.length;i++){
    for(let j=0;j<numbers.length;j++){
        if(numbers[i]<smallest){
            smallest=numbers[i]
        }
    }
}
console.log("Smallest number:", smallest)

// uestion 4

// Count how many times each pair is formed using nested loops.

// Example Output:

// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " " + j);
  }
}


// While Loop Questions
// Question 5

// Print numbers from 1 to 20 using a while loop.
let i = 1;

while (i <= 20) {
  console.log(i);
  i++;
}

// Find the sum of numbers from 1 to 10 using a while loop.

// Expected Output:

// 55
let i = 1;
let sum = 0;

while (i <= 10) {
  sum += i;
  i++;
}

console.log(sum);


// Question 9

// Create an object named student with the following properties:

// name
// age
// course
// city

// Print:

// Entire object
// Student name
// Student course

const student = {
  name: "Laxmi",
  age: 20,
  course: "Computer Science",
  city: "Mumbai"
};

console.log(student);
console.log(student.name);
console.log(student.course);

// Question 10

// Create the following object:

// const company = {
//   name: "Tech Solutions",
//   employees: 100,
//   location: "Mumbai",
//   departments: ["HR", "Development", "Sales"]
// };

// Print:

// Company name
// Location
// Last department

const company = {
  name: "Tech Solutions",
  employees: 100,
  location: "Mumbai",
  departments: ["HR", "Development", "Sales"]
};

console.log(company.name);
console.log(company.location);
console.log(company.departments[company.departments.length - 1]);


// Create the following object:

// const mobile = {
//   brand: "Samsung",
//   model: "S25",
//   price: 85000
// };

// Print all properties using both:

// mobile.brand
// mobile["brand"]


const mobile = {
  brand: "Samsung",
  model: "S25",
  price: 85000
};

console.log(mobile.brand);
console.log(mobile["brand"]);
console.log(mobile.model);
console.log(mobile["model"]);
console.log(mobile.price);
console.log(mobile["price"]);


// Find the biggest number from the array using nested loops.

let numbers = [12, 34, 56, 78, 90, 23, 45];
let numbers = [12, 34, 56, 78, 90, 23, 45];
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i; j < numbers.length; j++) {
    if (numbers[j] > largest) {
      largest = numbers[j];
    }
  }
}

console.log(largest);


// Bonus 4

// Print the following pattern using nested loops:

// *
// **
// ***
// ****
// *****


for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}