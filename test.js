// For Loop Questions
// Question 1:-Print numbers from 100 to 1 using a for loop.
for(let i=100;i>=1;i--){
    console.log(i)
}

// Question 2:-Print all numbers between 1 and 100 that are divisible by 7.

let numbers=0
for(let i=1;i<=100;i++){
    if(i%7==0){
        numbers=numbers+i
    }
}
console.log(numbers)


// Question 3:-Find the sum of all odd numbers between 1 and 50.
let sum=0;
for(let i=1;i<=50;i++){
    if(i%2!==0){
    sum=sum+i
}
}
console.log(sum)


// Question 5:-Count how many numbers between 1 and 500 are divisible by 10.
let count=0;
for(let i=1;i<500;i++){
    if(i%10===0){
        count=count+i
    }
}
console.log(count)




// Question 11:-Check whether a number is:
// Divisible by 2
// Divisible by 3
// Divisible by both
//  Not divisible by both

let number=12345;
if(number%2==0){
    console.log("Divisible by 2")
}
else if(number%3==0){
    console.log("Divisible by 3")
}
else if(number%2==0&& number%3==0){
    console.log("Divisible by both")
}
else {
    console.log("Not divisible by both")
}


// Question 12
// Create a grading system:

// 90+  → A Grade
// 75-89 → B Grade
// 50-74 → C Grade
// 35-49 → D Grade
// Below 35 → Fail

let grades=98
if(grades=90){
    console.log("A grade")
}
else if(grades>89){
    console.log("B grade")
}
else if(grades>75){
    console.log("C")
}
else if(grades>35){
    console.log("D grades")
}
else{
    console.log("fail")
}

// Question 13
// Check whether a person is eligible for marriage:

// Age >= 21 → Eligible
// Age < 21 → Not Eligible
let age=12;
if(age>=21){
    console.log("eligible")
}
else if(age<21){
    console.log("not eligible")
}

// Question 14
// Find the largest number among three numbers.
// Example:-10, 50, 30

let a =10;
let b=50;
let c=30;
if(a>b){
    console.log(a)
}
else if(b>c){
    console.log(b)
}
else if(c>a){
    console.log(c)
}


// Create a calculator using switch:

// +
// -
// *
// /
// Example:
//10 + 5 = 15
// let calculator=10/5
switch(calculator){
    case 10+5:
        console.log("addition")
        break;
    case 10-5:
        console.log("subtaction")  
        break;
    case 10*5:
        console.log("multiplication")      
        break;
    case 10/5:
        console.log("division")   
        break;
    default:
        console.log("enter valid number") 
}





// Create switch for mobile brands:

// Apple → iPhone
// Samsung → Galaxy
// OnePlus → Android Phone
// Default → Brand Not Found

let brand ="Samsung"
switch(brand){
    case "Apple":
        console.log("iphone")
        break;
    case "Samsung":
        console.log("galaxy")
        break;
    case "OnePlus":
        console.log("Android Phone")
        break;
    default:
    console.log("Brand Not Found") 
}


// Question 18
// Create switch for user roles:

// admin → Full Access
// teacher → Manage Students
// student → View Courses
// Default → Access Denied

let user="student"
switch(user){
    case "admin":
        console.log("Full Access")
        break;
    case "teacher":
        console.log("anage Students")
        break;
    case "student":
        console.log("View Courses")
        break;
    default:
        console.log(" Access Denied")
}


// Question 19
// Print numbers from 1 to 100:
// If number is:
// divisible by 3 → "Fizz"
// divisible by 5 → "Buzz"
// divisible by both → "FizzBuzz"
// otherwise print number

let num=12235;
for(let i=1;i<100;i++){
if(num%3==0){
    console.log("Fizz")
    
}
else if(num%5==0){
    console.log("Buzz")
}
else if(num%3==0 && num%5==0){
    console.log("FizzBuzz")
}
else {
    console.log("Not divisible by both")
}
}


// Question 20
// Find how many numbers between 1 and 200 are:
// Even
// Odd

let num=45;
for(let i=1;i<200;i++){
    if(num%2==0){
        num[i]
        console.log("even")
    }
    else{
        console.log("odd")

    }
}
