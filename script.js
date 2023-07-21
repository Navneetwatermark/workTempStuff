const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});



// important:

const userDetails = fetch("https://api.github.com/users/octocat")

userDetails.then((Response) => {
  // console.log(Response);
  Response.json().then((data)=>{
    console.log(data);
  })
})

// async function getDetails(){
//   const userDetails2 = await fetch("https://api.github.com/users/octocat")
//   const data = await userDetails2.json()
//   console.log(data.login);
// }
// getDetails();



const sum = () => {
    // let a = 8
    // a += 1
    // console.log(a)
    // if(a <10)
    //   console.log(sum())
  console.log(10);
}
console.log(sum())


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

// doubt -> what resuce reduces and usecase
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





// find

let users = ['hi', 'hello', "hey", 1, 2]
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


// rest operator
let fun1 = (...numbers) => {
  console.log(numbers);
  console.log(numbers[0]);
}
fun1(1, 2, 3, 8, "hey");

// spread operator



// Destructuring
// classes 
// generators
//diff bw '==' and '==='



// temps.forEach((=))

var a = ()=>{
  console.log("this function does nothing");
}
console.log(typeof(a));a();