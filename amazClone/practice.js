// writing functions in different manner

function saySomething(param1) {
    console.log("hi");
    console.log(param1);
}

saySomething();

let sumVar = (a, b) => {
    return a+b;
};

// if above function have just one line

let sumVar2 = (a, b) => a+b; 

let sumVar3 = (a, b) => { return a+b }; 

// if we just have one parameter

let sumVar4 = a => a+a ; // here a is a parameter passed and fun is returning a+a


// arrow funcs are more useful at places where we use anonymous functions

document.addEventListener('click', ()=> console.log("do this") );








class Person{
    
    // let temp = () => {
    //     console.log("arrow : " + this.name);
    // }
    
    temp2 () {
        console.log("normal fun : " + this.name);
    }

    constructor(name){
        this.name = name;
    }
}


let person1 = new person('Rahul');
// person1.temp();
person1.temp2();
console.log("here"+this.name);
console.log(this);






















































// in JS 

// Named function

// anonymous function