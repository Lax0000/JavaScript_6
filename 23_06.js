// Question 1:-Print numbers from 20 to 1 using a for loop.
// for(let i=20;i>=1;i--){
//     console.log(i)
// }
// Question 2:-Print numbers from 50 to 40 in reverse order.

for(let i=50;i>=40;i--){
    console.log(i)
}

// Question 3:-Given the array below, print all elements one by one.
// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// Find the index of "Rahul" in the array below using a for loop.

// let students = ["Virat", "Rohit", "Rahul", "Kane"];
// for(let i=0;i<students.length;i++){
//     if(students[i]==="Rahul"){
//         console.log("rahul is found at index",i)
//     }
// }

// Question 6:-Find the index of "Orange" in the array below.

let fruits = ["Apple", "Banana", "Orange", "Mango"];
for(let i=0;i<fruits.length;i++){
    if(fruits[i]==="Orange"){
    console.log("Orange is found at index",i)
    }
}

// Check whether "Python" exists in the array below.If found, print its index; otherwise print:"Language not found"
// let languages = ["HTML", "CSS", "JavaScript", "React"];
// let found=false;
// for(let i=0;i<languages.length;i++){
//     if(languages[i]==="Python"){
//         console.log(" 'Python' exists in the array",i)
//         found=true;
//         break;
//     }
// }
//     if(!found){
//         console.log("Language not found")
//     }

    // Find the index of 40 in the following array.

let numbers = [10, 20, 30, 40, 50];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===40){
        console.log("40 is found at index:",i);
    break;
    }
}

// Print all elements of the array in reverse order.

let colors = ["Red", "Blue", "Green", "Yellow"];
for(let i=colors.length-1;i>=0;i--){
    console.log(colors[i])
}

// Search for "Dog" in the array below.If found, print the index.Otherwise print:"Dog is not present in array"

let animals = ["Cat", "Tiger", "Lion", "Elephant"];
let found=false
for(let i=0;i<animals.length;i++){
    if(animals[i]==="Dog"){
        console.log("Dog at the index",i)
        found=true;
        break;
    }
}
    if(!found) {
        console.log("Dog is not present in array")
    }
