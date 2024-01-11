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


