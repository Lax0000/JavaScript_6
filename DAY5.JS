var students=[];
console.log("students")
students.push("virat");
students.push("Rohit");
students.push("Rahul");
console.log(students);
console.log(students[0])




var numbers=[1,2,3,4];
const lastElement=numbers.pop()
const secondlastElement=numbers.pop()
console.log(numbers,lastElement,secondlastElement)




const numbers=[1,2,3,4];
const firstElement=numbers.shift();
console.log(numbers,firstElement)


const numbers=[1,2,3,4];
numbers.unshift(0);
numbers.unshift(3);
numbers.unshift(7)
console.log(numbers);



const numbers=[1,5,2,4,7]
const updatdNumbers = numbers.map((number) => number + number);
console.log(updatdNumbers,"updateNumbers")


const product=[100,500,1000];
const gstIncludedPrice=product.map((price) => price*1.18);
console.log(gstIncludedPrice)


// filter;

const numbers =[1,2,3,4,5,6,7,8,9];
const oddNumbers=numbers.filter((num) => num%2===1); 
console.log(oddNumbers,"oddnumbers")



const studentsData = [
  { name: "Virat", active: false },
  { name: "Kane", active: false },
  { name: "Rahul", active: true },
];

const activePlayers = studentsData.filter((player) => player.active);

console.log(activePlayers, "activePlayers");

const studentsData=[
    {name:"laxmi",active:false},
    {name:"geeta",active:false},
    {name:"suresh",active:true},
];
const activePlayers=studentsData.filter((player) => player.active);
console.log(activePlayers,"activeplayers")


// // Reduce - return a single value

var number=[1,2,3,4,5];
const addition=number.reduce((acc,number)=>acc+number,0);
console.log(addition,"addition")

const cart=[100,300,3567842];
const totalcount=cart.reduce((acc)=>acc+1,0)
console.log(totalcount)




// conditions ? true : false;
console.log(2>3 ? "true":"false jwhfiuyfiudhwdh")

const numbers=[3,6,10,58,8]
const max=numbers.reduce((acc,num)=>(acc>num ?acc:num),0);
console.log(max,"max");


const numbers = [1, 2, 3, 4];
numbers.forEach((numbers)=>console.log(numbers*2));



// at

const numbers=["laxmi",2,6,7,8,87];
console.log(numbers.at(2));



const array1=[1,23,5];
const array2=[4,5,82,45];
const array3=array1.concat(array2);
console.log(array3,"array3")




// wrong ha again perfoem it 
const numbers=[1,32,5,87,77,825,5];
const biggerThan=numbers.find((num)=>num>87);
console.log(biggerThan,"biggerthan")


const number = [3, 4, 6, 7, 8, 3, 2, 5, 7, 434];
const output=number.findIndex((num)=> num>10);

console.log(output, "output");