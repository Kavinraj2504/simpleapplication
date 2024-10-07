
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let sumEven = 0;
let sumOdd = 0;


for (let i = 0; i < numbers.length; i++) {
   
    if (numbers[i] % 2 === 0) {
        sumEven += numbers[i]; 
    } else {
        sumOdd += numbers[i];
    }
}


console.log("Sum of Even Numbers: " + sumEven);
console.log("Sum of Odd Numbers: " + sumOdd);
