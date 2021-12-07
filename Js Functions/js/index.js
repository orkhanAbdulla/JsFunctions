let item =document.getElementsByClassName("item")
let main = document.getElementById("main")

// console.log(item);
// console.log(main);

let itemNew = document.querySelector(".item")
let itemNewAll = document.querySelectorAll(".item")
let button = document.querySelector("button")
let screen = document.querySelector(".screen")


// console.log(itemNew);
// console.log(itemNewAll);
// console.log(itemNewTwo);

console.log();

button.addEventListener("click", () => {
    // сalc()
    console.log(main.innerText);
    screen.innerText = "Sagol"
    // console.log(screen.innerText);
})

//     // console.log(test);
// function Test() {
// return 5;
// }

// Test()


// const test = function () {
//     return 5;
// }

// const test2 = 5;

// arrowFunctioon()


// const arrowFunctioon = () => {
//     console.log("This is arrowFunction");
// }

// let a = 5;
// if (a === 5) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }


// const student = {
//     names: "Lala",
//     surname: "S",
//     age: 20,
//     func: [{}, {}, {}]
// }

// console.log(student["names"]);


// let 


function sum(numberOne, numberTwo) {
    return numberOne + numberTwo
}


function сalc(a, b, operator) {
    switch (operator) {
        case '+':
            console.log(sum(a, b));
            break;
    
        default:
            break;
    }
    
}

// console.log(сalc(2, 10, "+", 5));

// sum(8, 5)



// func(5, 6)
// func(9, 8)