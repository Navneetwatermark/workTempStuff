const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});



// important:

// promises fetch

const userDetails = fetch("https://api.github.com/users/octocat")

userDetails.then((Response) => {
  // console.log(Response);
  Response.json().then((data)=>{
    console.log(data);
  })
})

// async await 
async function getDetails(){
  const userDetails2 = await fetch("https://api.github.com/users/octocat")
  const data = await userDetails2.json()
  console.log(data);
}
getDetails();



// const sum = () => {
//     // let a = 8
//     // a += 1
//     // console.log(a)
//     // if(a <10)
//     //   console.log(sum())
//   console.log(10);
// }
// console.log(sum())



// array methods

const arr = [1, 3, 4, 8, 9]

// map helper
console.log(arr.map((ele)=> 0))
// map property/method returns a new array of same size as input
// it basically traverse over array and ele for every element


// filter helper
console.log(arr.filter((ele) => ele%2))
console.log(arr.filter((ele) =>{
  
}))
// this also returns an array of <= sizeof input
// traverse and insert element for which true is returned


// reduce helper
// doubt -> what reduce reduces and usecase
const ans = arr.reduce((accumulator, current) => {
    accumulator += current*2
    return accumulator
}, 10)
console.log(ans);
// const ans2 = arr.reduce((max, current) => {
//     max < current ? max = current 
//     return max
// }, -1e7)
// console.log(ans2);


// for each helper
const numsArr = [10, 20, 30, 40, 50, 60];
numsArr.forEach((ele, ind)=>{
  console.log(`index is ${ind}. element is ${ele}`);
})


// find
const users = ['hi', 'hello', "hey", 1, 2]
console.log(users.find((x) => x === "hik"))
// returns only first element where condition is met
// https://watermark.udemy.com/course/javascript-es6-tutorial/learn/quiz/263774#overview


// every
let temps = ['1', 2, 3, 49, 91]
console.log(temps.every((it) => typeof(it) === typeof(1)));

// some
console.log(temps.some((it) => typeof(it) === typeof(1)));


// const/var


//diff bw let, const and var




// template strings
console.log(`I can use my vars like this ${temps[0]}`);
// ${any valid JS}


// emnhanced object literals
// doubt

// random
((a = 1011) => {
  console.log(a, "this is an IIFE try");
});


// rest operator
console.log("default param");
let fun1 = (...numbers) => {
  // console.log(a + " ");
  console.log(numbers);
  console.log("here");
}
fun1(1, 2, 3, 4, "hey");


// spread operator
array2 = [1, 2, 3, 4]
let array1 = [...array2]
//spread operator can be used to give spread elements from arr2 in arr1


// Destructuring
let myArr1 = ["itemval1", "itemval2", "itemval3"]
let [item1,, item2] = [...myArr1]
console.log(item1, item2);

let bigArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
let [num1, , num3, , ...restelesOfArrafter4] = bigArr
console.log(num1, num3, restelesOfArrafter4);


// classes 


// generators


//IIFe


//diff bw '==' and '==='



// random
// var a = ()=>{
//   console.log("this function does nothing");
// }
// console.log(typeof(a));a();