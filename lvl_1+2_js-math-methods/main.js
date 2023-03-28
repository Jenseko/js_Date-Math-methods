console.log('math methods - Here I come!');

// ===================== lvl 1-1 Math. PI ======================

const PI = Math.PI

console.log(PI);
console.log(PI.toFixed(2));


// ===================== lvl 1-2 Math.round() ==================

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

array.forEach(elt => {
    console.log(Math.round(elt))
})


// =============== lvl 1-3 Math.random() Math.floor () =========

let randomNum = Math.random();
let randomNum1_10 = Math.random() * 10;
let randomNum1_100 = Math.random() * 100;

console.log(randomNum);
console.log(randomNum1_10);
console.log(randomNum1_100);

// =============== lvl 2-1 Math.round() toFixed() ==============

const roundTo = (userZahl,kommaStellen) => {
    return (userZahl.toFixed(kommaStellen));
}
console.log(roundTo(5.499999999,2));


// =============== lvl 2-2 Math.round() toFixed() ==============

// let usersChoice = prompt("Guess the Computers Number!","10");

// let comChoice = Math.ceil(Math.random() * 10);
// // console.log(comChoice);

// if (Number(usersChoice) === comChoice) {
//     console.log(`RICHTIG! Der Computer wählte ${comChoice}!`);
// } else {
//     console.log(`FALSCH! Der Computer wählte ${comChoice}!`);
// }
