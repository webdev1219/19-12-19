var name = "Paco"; // nunca
let lastName = "Soria";
let age = 20;
let isStudent = true;
let sex = null;
let notes = undefined;
// let notes;
notes = [2];
notes[0]; // accede a la posicion 0
notes.pop(); // sacar el elemento 

let student = {
    name: 'Jacinto',
    lastName: 'Benavente',
    age: 32,
    sex: null,
    notes: [1, 2, 3],
    outfits: []
}

const IVA = 21;

let result = prompt('Llueve');

// let condition = result === "si";

if (!!result) {
    student.outfits.push('paraguas');
} else if (result === 'no') {
    student.outfits.push('gafas de sol');
} else {
    console.log('si o no?')
}

// switch (result) {
//     case "si":
//         student.outfits.push('paraguas');
//         break;
//     case "no":
//         student.outfits.push('gafas de sol');
//         break;
//     default:
//         console.log('si o no?')
//         break;
// }


let x = 0;
while (x <= 3) {
    // let result = prompt('nota 1')
    student.notes.push(prompt('nota 1'));
    x = x + 1;
}

// do {

// } while (condition);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

console.log(student);
