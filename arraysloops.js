//Sum of Resistors in Series

// Calculate the sum of all resistors connected in series.
// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

let resistenceValues = [-1,5,6,3]
let sum = 0;

for (let i = 0; i < resistenceValues.length; i++) {

    let resistence = resistenceValues[i];
    
    if (resistence < 0) {
        resistence = resistence * (-1)
    }
        sum = sum + resistence;
}
    
console.log("La suma de las resistencias es: " + sum + " ohms");



//Number divided into halves
//Given a number, return the number divided into its halves in an array.

function numDiv(numero) {
    const mitad1 = numero / 2;
    const mitad2 = numero - mitad1;

    const arrayMitades = [mitad1, mitad2];
    return arrayMitades;
}

const resultado = numDiv(10);
console.log("Resultado : ", resultado); // [5,5]




//Secret Society
//Find the name of a secret society based on the first letter of each member's name.
//Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.


const secretName = members => {
    let societyInicial = [];
    let society = "";

    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        societyInicial.push(member[0])
    }

        societyInicial.sort();

    for (let index = 0; index < societyInicial.length; index++) {
        society = society + societyInicial[index];
        
    }

        return society;

}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));



//Online status
// Display online status for a list of users.
//
// Example:
// - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.


 const users = ['mockIng99', 'J0eyPunch', 'glassedFer', 'anon123'];

    function getLenght(arr) {
     return arr.length;
    }

    function calcRemaining(total) {
        return total - 2;
    }

    function getUsers(arr) {
        const users = arr[0] + arr [1];
         return users;
    }

 function onlineStatus (arr) {
     const total = getLenght(arr);
     const rest = calcRemaining(total);
     const fisrtUsers = getUsers(arr);

     console.log(`Users: ${fisrtUsers}, and ${rest} are online`);
     
    }
    
    onlineStatus(users);








//Array of Multiples
 //Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 //
//Examples:
//- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
//- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.


function arrayMultiplos(number, length) {
    const result = [];

    for (let index = 1; index <= length; index++) {
        result.push(number * index);
    }
    return result;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));



//Positive dominance in Array
//Write a function to determine if an array is positively dominant.
//An array is positively dominant when the majority of its elements are positive.

const numArr = [-1000, -1, 50, 1, 2, 5];
const negativeArr = [-100, -1, -50, -1, 5, 2];

function positiveArr(arr) {
    let positiveCount = 0;
    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        }
    });

    const mid = arr.length / 2;
    return positiveCount > mid;
}

const res = positiveArr(numArr)
console.log(res);


//Antipodal Average
// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.
// Example:
// - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.


const antipodal = array => {
    const result = [];

    for (let index1 = 0, index2 = array.length -1; index1<index2; index1++, index2--) {
        const sumDiv = (array[index1] + array[index2]) / 2;
        result.push(sumDiv);

    }
    return result;
};


console.log(antipodal([1,2,3,5,22,6]));

