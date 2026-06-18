// 1. push()
// Question 1:-Create an empty array called fruits and add "Apple", "Mango", and "Banana" using push(). Print the array.

let fruits=[];
fruits.push("Apple", "Mango","Banana")
console.log(fruits)

// Create an array cities = ["Mumbai"]. Add "Pune" and "Delhi" using push() and print the second city.
let cities=["Mumbai"]
cities.push("Pune","Delhi")
// console.log(cities)
// second lelemet print nahi  hi rah ahai
console.log(cities[1])

// 2. pop()
// Question 1:- Create an array [10, 20, 30, 40, 50]. Remove the last element using pop() and print both the removed element and updated array.


// let array=[10, 20, 30, 40, 50]
// let lastElement=array.pop()
// console.log(array,lastElement)


// Question 2:
// Create an array of colors ["Red", "Blue", "Green"]. Remove the last two colors and print the remaining array.

// let colors=["Red", "Blue", "Green"];
// let lastElement=colors.pop()
// let secondlastElement=colors.pop()
// console.log(colors)


// 3. shift()
// Question 1:-Create an array ["Virat", "Rohit", "Rahul"]. Remove the first player and print the removed player.

let player=["Virat", "Rohit", "Rahul"]
let removedPlayer=player.shift()
console.log(removedPlayer)

// Question 2:-Create an array [100, 200, 300, 400]. Remove the first element and print the updated array.

let element=[100, 200, 300, 400];
element.shift()
console.log("element",element)



// 4. unshift()
// Question 1:-Create an array [2, 3, 4]. Add 1 at the beginning using unshift()


let check=[2, 3, 4]
check.unshift(1)
console.log(check)



// Question 2:-Create an array ["B", "C", "D"]. Add "A" at the start and print the array.

let add=["B", "C", "D"];
add.unshift("A")
console.log("A at the start",add)


//  map()
// Question 1:-Create an array . Use map() to create a new array containing squares of all numbers.


let numbers=[1, 2, 3, 4, 5];
let updatdNumbers=numbers.map(numbers =>numbers+1);
console.log(updatdNumbers,"updatdNumbers")

// Question 2:-Create an array of prices [100, 200, 300]. Add 10% tax to each price using map().

let price=[100,200,300];
let priceWithTax=price.map(price=>price*1.10)
console.log(priceWithTax)





// filter()
// Question 1:-Create an array [1,2,3,4,5,6,7,8]. Use filter() to get all even numbers.
// let array=[1,2,3,4,5,6,7,8]
// let updatdNumbers=array.filter((array)=>array%2===0);
// console.log("updatdNumbers",updatdNumbers)


// Question 2:-Create an array [12, 45, 7, 89, 23]. Use filter() to get numbers greater than 20.
// let array=[12, 45, 7, 89, 23];
// let updatdNumbers=array.filter((array)=>array>20);
// console.log("updateNumber",updatdNumbers)

/* 7. filter() with Objects
 Question 1:
 const employees = [
   { name: "Amit", active: true },
   { name: "Riya", active: false },
   { name: "John", active: true },
 ];

 Find all active employees.*/

 const employees = [
   { name: "Amit", active: true },
   { name: "Riya", active: false },
   { name: "John", active: true },
 ];
 const activemployess=employees.filter((employees)=>employees.active);
 console.log("activemployess",activemployess);


//  Question 2:
/*const products = [
  { name: "Laptop", available: true },
  { name: "Mobile", available: false },
  { name: "TV", available: true },
];

Find all available products.*/
const products = [
  { name: "Laptop", available: true },
  { name: "Mobile", available: false },
  { name: "TV", available: true },
];
const availableProduct=products.filter((products)=>products.available);
console.log("availableProduct",availableProduct)



// 8. reduce() - Sum of Numbers
// Question 1:-Use reduce() to find the sum of [5, 10, 15, 20]

let num=[5, 10, 15, 20];
let sum=num.reduce((acc,num)=>acc+num,0)
console.log(sum)


// Question 2:
//Use reduce() to find the total of [100, 200, 300, 400].

let price=[100, 200, 300, 400]
let total=price.reduce((acc,price)=>acc+price,0)
console.log(total)


// 9. reduce() - Cart Total
// Question 1:-Calculate the total bill of cart items [500, 1200, 800].
// galat hai
let items=[500, 1200, 800];
let card=items.reduce((acc,items)=>acc+items,0)
console.log(card)


// Question 2:-Calculate the total salary from [25000, 30000, 40000].
let salary=[25000, 30000, 40000]
let totalSalary=salary.reduce((acc,salary)=>acc+salary,0)
console.log(totalSalary)

// 10. reduce() - Count Elements
// Question 1:-Count the number of elements in [1,2,3,4,5,6] using reduce().

let Count=[1,2,3,4,5,6];
let totalcount=Count.reduce((acc)=>acc+1,0)
console.log(totalcount)

// Question 2:-Count the number of students in ["A", "B", "C", "D"] using reduce().
let students=["A", "B", "C", "D"]
let totalStudent=students.reduce((acc)=>acc+1,0);
console.log(totalStudent)


// 11. Ternary Operator ? :
// Question 1:-Check whether 10 is greater than 5. Print "Yes" otherwise "No".

console.log(10>5 ? "true":"false")

// Question 2:-Check whether a number num = 15 is even or odd using the ternary operator.
// learn more ternary operator
let num=15;
console.log(num%2===0?"Even":"odd")


// 12. reduce() - Find Maximum
// Question 1:-Find the largest number in [5, 12, 8, 20, 3].
// galt hai 
// const number=[5, 12, 8, 20, 3]
// const max=number.reduce((acc,number)=>(acc>num?acc:num));
// console.log(max)

// Question 2:-Find the maximum marks from [67, 89, 45, 98, 76].
// galat hai phir se arna hai
// let marks=[67, 89, 45, 98, 76];
// let maximum=marks.reduce((acc,marks)=>(acc,marks? acc:marks))
// console.log(maximum)



// 13. forEach()
// Question 1:-Print double of every number in [2, 4, 6, 8] using forEach().

// let number=[2, 4, 6, 8];
// number.forEach((number)=>console.log(number*2));

// Question 2:-Print the square of each number in [1, 2, 3, 4] using forEach().
let number=[1, 2, 3, 4]
number.forEach((number)=>console.log(number*number))


// 14. at()
// Question 1:-Create an array ["HTML", "CSS", "JavaScript"] and print the first element using at().

let language= ["HTML", "CSS", "JavaScript"]
console.log(language.at(0))


// Question 2:-Create an array [10, 20, 30, 40] and print the last element using at(-1).
let array=[10, 20, 30, 40]
console.log(array.at(-1))


// 15. concat()
// Question 1:-Combine [1,2,3] and [4,5,6] using concat().

// let string1=[1,2,3]
// let string2=[4,5,6]
// let string3=string1.concat(string2)
// console.log(string3)

// Question 2:-Combine ["HTML", "CSS"] and ["JS", "React"] into a new array.

// let module=["HTML", "CSS"]
// let module2=["JS", "React"]
// let module3=module.concat(module2)
// console.log(module3)


// 16. find()
// Question 1:-Find the first number greater than 50 in [10, 25, 60, 80, 40].
let num=[10, 25, 60, 80, 40];
let firstEven=num.find(num=>num>50);
console.log(firstEven)


// Question 2:-Find the first even number in [1, 3, 5, 8, 10]
let check=[1, 3, 5, 8, 10];
let even=check.find(check=>check%2===0)
console.log(even)




// 17. findIndex()
// Question 1:-Find the index of the first number greater than 20 in [5, 10, 25, 30, 15].

let numbers = [5, 10, 25, 30, 15];
let index = numbers.findIndex(num => num > 20);
console.log(index);


// Question 2:-Find the index of the first odd number in [2, 4, 6, 7, 8]

let numbers = [2, 4, 6, 7, 8];
let index = numbers.findIndex(num => num % 2 !== 0);
console.log(index);




// 18. Array Index Access []
// Question 1:-Create an array ["India", "USA", "Japan"] and print the first country.
let country=["India", "USA", "Japan"];
console.log(country[0])


// Question 2:- Create an array [100, 200, 300, 400] and print the third element.

let arr=[100, 200, 300, 400];
console.log(arr[2])





