// Question 1-Print numbers from 1 to 20 using a for loop.

// for(let i=1;i<=20;i++)
//     console.log(i)

// Question 2-Print numbers from 50 to 100.

// for(let i=50;i<=100;i++)
//     console.log(i)


// Question 3-Print all even numbers between 1 and 50.
// for(let i=1;i<=50;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// Question 4-Print all odd numbers between 1 and 50.
// for(let i=1;i<50;i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }


// Question 5-Find the sum of numbers from 1 to 100.
// let sum=0
// for(let i=0;i<=100;i++){
//     sum=sum+i
// }
// console.log(sum)


// Question 6-Count how many numbers are divisible by 5 between 1 and 100.
// let count=0
// for(let i=1;i<=100;i++){
//     if(i%5==0){
//         count++
//     }
// }
// console.log(count)

// Question 7-Print the multiplication table of 7.




// Question 8-Print numbers from 20 to 1 in reverse order.
// for(let i=20;i>=1;i--)
//     console.log(i)



// Question 9-Find the total count of even and odd numbers between 1 and 200.
// let evenCount=0;
// let oddCount=0;
// for(let i=1;i<200;i++){
//     if(i%2===0){
//         evenCount++
//     }
//     else{
//         oddCount++
//     }
// }
// console.log(evenCount)
// console.log(oddCount)


// Print the square of numbers from 1 to 10.
// Example:

// 1 -> 1
// 2 -> 4
// 3 -> 9

// for(let i=1;i<10;i++){
//     console.log(i*i)
// }


// If-Else Practice Questions (10)
// Question 1-Check if a number is even or odd.
// let num=16;
// if(num%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }


// Question 2

// Check whether a person is eligible for a driving license:

// Age > 18 → Eligible
// Age == 18 → Learner License
// Age < 18 → Not Eligible


// let age=18;
// if(age>18){
//     console.log("Eligible")
// }
// else if(age<18){
//     console.log("Not Eligible")
// }
// else (age==18)
// {
//     console.log("Learner License")
// }

// Question 3

// Check whether a student has passed or failed:

// Marks >= 35 → Pass
// Marks < 35 → Fail

// let marks =50;
// if(marks>=35){
//     console.log("pass")
// }
// else {
//     console.log("fail")
// }


// Question 4-Check whether a number is positive, negative, or zero.
// let num=15;
// if(num>0){
//     console.log("positive")
// }
// else if(num<0){
//     console.log("negative")
// }

// else
// {
//     console.log("zero")

// }


// Question 5

// Check whether a person can vote:

// Age >= 18 → Can Vote
// Otherwise → Cannot Vote

// let age=60;
// if(age>=18){
//     console.log("can vote")
// }
// else {
//     console.log("cannot vote")
// }

// Question 6-Check which number is greater between two numbers.
// let a =10;
// let b=1;
// if(a>b){
//     console.log(a)
// }
// else{
//     console.log(b)
// }

// Question 7

// Check whether a year is a leap year or not.
// (Hint: divisible by 4)

// let num=2029;
// if(num%2==4){
//     console.log("Leap Year")
// }
// else{
//     console.log("Not Leap Year")
// }

// Question 8(learn it again)

// Check whether a user has completed an assignment.

// true → "Good Job!"
// false → "Please Complete It"

// let completed=false
// if(completed){
//     console.log("Good Job!")
// }
// else{
//     console.log("Please Complete It")
// }

// Question 9:-Check whether a number is divisible by both 3 and 5.
let num=30;
if(num%3==0&& num%5==0){
    console.log("Divisible by both 3 and 5")
}
else{
console.log("Divisible by not 3 and 5")
}

// Question 10

// Check whether a user can enter a movie:

// Age >= 18 → Entry Allowed
// Otherwise → Entry Denied


let age=20;
if(age>=18){
    console.log("Entry Allowed")
}
else{
    console.log("Entry Denied")
}


// Switch Practice Questions (10)
// Question 1:-
// Create a switch statement for fruits:

// Apple
// Mango
// Banana
// Default: "Fruit Not Available"

let fruits="kiwi";
switch(fruits){
    case "apple":
    console.log("apple")
    break;

    case "mango":
    console.log("Mango")
    break;

    case "banana":
        console.log("banana")
        break;
        default:
            console.log("fruit not avilable")
}


// Create a switch statement for weekdays:

// Monday
// Tuesday
// Wednesday
// Default: "Invalid Day"

let Days="sunday"
switch(Days){
    case "monday":
        console.log("monday")
        break;

    case "tuesday":
            console.log("tuesday")
            break;
    case "wedonesay":
        console.log("wednesady")
        break;
    default:
        console.log(":invalid day")
}

// Create a switch statement for months:

// January
// February
// March
// Default: "Month Not Found"

let months="auguest"
switch(months){
    case "januagery":
        console.log("january")
        break;
    case "feb":
        console.log("febuary")  
        break;
    case "march":
        console.log("march")
        break; 
    default:
        console.log("Month Not Found") 
}

// Question 4

// Create a switch statement for grades:

// A → Excellent
// B → Good
// C → Average
// D → Needs Improvement
// Default → Invalid Grade


let grades="A";
switch(grades){
    case "A":
        console.log("Excellent")
        break;
    case "B":
        console.log("Good")
        break;
    case "C":
        console.log("Average")
        break;
    case "D":
        console.log("Needs Improvement")   
        break; 
    default:
        console.log("Invalid Grade")
}


// Question 5

// Create a switch statement for traffic lights:

// Red → Stop
// Yellow → Wait
// Green → Go
// Default → Invalid Signal

let lights="pink";
switch(lights){
    case "Red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("wait")
        break;
    case "green":
        console.log("GO")
        break;
    default:
        console.log("Invalid Signal")
}
// Question 6

// Create a switch statement for subjects:

// Math
// Science
// English
// Default → Subject Not Available

let subjects="hindi";
switch(subjects){
    case "math":
        console.log("math")
        break;
    case "science":
        console.log("english")
        break;
    case "English":
        console.log("english")
        break;
        default:
            console.log("Subject Not Available")
}

// Question 7

// Create a switch statement for payment methods:

// UPI
// Card
// Cash
// Default → Payment Method Not Supported

let payment="cash"
switch(payment){
    case "upi":
    console.log("upi")
    break;

    case "card":
        console.log("cash")
        break;
    case "cash":
        console.log("cash")  
        break;  
    default:
        console.log(" Payment Method Not Supported")
}



// Bonus Questions (Mix of Loop + If-Else)
// Question 1

// Print numbers from 1 to 100 and display:

// "Even" if number is even
// "Odd" if number is odd

// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i,"even")
//     }
//     else{
//         console.log(i,"odd")
//     }
// }


// Question 2
// Find how many numbers between 1 and 100 are divisible by 3.

// for(let i=1;i<100;i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }

// Question 3:-Print all numbers from 1 to 50 that are divisible by both 2 and 5.
// for(let i=1;i<50;i++){
//     if(i%2==0&& i%5==0){
//         console.log(i)
//     }
// }


// Question 4:-Calculate the total sum of all even numbers between 1 and 100.
let  sum=0
for(let i=0;i<100;i++){
    sum=sum+i
}
console.log(sum)

// Question 5

// Print numbers from 1 to 30 and for each number:

// If divisible by 3 → Print "Fizz"
// Otherwise → Print the number itself.

for(let i=1;i<30;i++){
    if(i%3==0){
        console.log("pizza")
    }
    else{
        console.log("Print the number itself.")
    }
}