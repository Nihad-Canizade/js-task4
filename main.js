// Condition 1

var massiv = [1, 2, 3, 4, 5];
var num = 4;
var massiv2 = [];

function myFunc(massiv, num) {
    for (let i = 0; i < num; i++) {
        massiv2.push(massiv[i]);
    }
    console.log(massiv2);
}

myFunc(massiv, num);


// Condition 2

let array = [];

function findMultiples(number, limit) {
    for (let i = number; i <= limit; i = i * 2) {
        array.push(i);
    }
    console.log(array);
}

findMultiples(5, 30);


// Condition 3

let arr = [];

function Count(number2){
    for(let i=1; i<= number2; i++){
        arr.push(i);
    }

    console.log(arr);
}

Count(10);