// function calculateAge(birthYear) {
//   let age = 2020 - birthYear;
//   return age;
// }

// let ageJohn = calculateAge(1995);

// console.log(ageJohn); // 25

// function yearsUntilRetirement(year, name) {
//   let age = calculateAge(year);
//   let retirement = 65 - age;
//   console.log(`${name} retires in ${retirement} years.`);
// }

// yearsUntilRetirement(1995, 'John Doe');
// // John Doe retires in 40 years.

// // RETO 1
// // Crear una función power que recibe dos argumentos
// //  base y exponent. La función debe retornar el resultado de
// //   elevar base a la potencia exponent.

// function power(base, exponente) {
//   let potencia=1;
//   for (let i  = 0; i < exponente; i++){

//     potencia = (base * potencia);

//   }
// return potencia;
// }

// console.log(power(2,3));

// // expresion de funcion
// let square = function(number) {
//   return number * number;
// }

// let squareOfFour = square(4);

// console.log(squareOfFour); // 16

// // factorial

// let factorial = function fac(num) {
//   return num < 2 ? 1 : num * fac(num - 1)
// }

// console.log(factorial(5)); // 120

// // ejemplo 2
// let whatDoYouDo = function(job, name) {
//   switch (job) {
//     case 'developer':
//       return name + ' develops cool apps.';
//     case 'designer':
//       return name + ' designs awesome websites.';
//     default:
//       return name + ' does something else.'
//   }
// }

// console.log(whatDoYouDo('developer', 'John Doe'));
// console.log(whatDoYouDo('designer', 'Jane Doe'));
// console.log(whatDoYouDo('retired', 'Mark Doe'));

// //ejemplo 3
// function logName() {
//   var name = "John Doe";
//   console.log(name);
// }

// logName(); // John Doe

// (function() {
//   var name = "John Doe";
//   console.log(name);
// })();

// (function(lastName) {
//   var firstName = "John";
//   console.log(`${firstName} ${lastName}`);
// })('Doe');

// // arrow functions

// let firstNames = [ 'John', 'Jane', 'Mark'];

// function getFullNames(names) {
//   let fullNames = []

//   for(let name of names) {
//     fullNames.push(`${name} Doe`)
//   }

//   return fullNames
// }

// let fullNames = getFullNames(firstNames)

// console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]

// // fat arrow

// let  firstNames1 = [ 'John', 'Jane', 'Mark'];

// let  getFullNames1 = (names1) => {
//   let  fullNames1 = []

//   for(let name1 of names1) {
//     fullNames1.push(`${name1} Doe`)
//   }

//   return fullNames1
// }

// let  fullNames1 = getFullNames1(firstNames1)

// console.log(fullNames1); // ["John Doe", "Jane Doe", "Mark Doe"]

// //Paréntesis

// let firstNames2 = [ 'John', 'Jane', 'Mark'];

// let getFullNames2 = names2 => {
//   let fullNames2 = []

//   for(let name2 of names2) {
//     fullNames2.push(`${name2} Doe`)
//   }

//   return fullNames2
// }

// let fullNames3 = getFullNames2(firstNames2)

// console.log(fullNames3); // ["John Doe", "Jane Doe", "Mark Doe"]

// // Return implícito

// let logName3 = (name3) => console.log(`Hello ${name3}!`);

// logName3('John Doe'); // Hello John Doe!

// //Reto 2: Número mayor
// // Completar la función getLargerInt la cual recibe dos números enteros. La función debe retornar el número mayor.

// function getLargerInt(number1, number2) {

//   if (number1 > number2){
//  return number1;
//   }else{
//     return number2;
//   }
// }

// console.log(getLargerInt(3,4));

//Reto 3: Fibonacci
// Desarrollo
// En la serie de Fibonacci:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// Cada elemento se obtiene sumando los dos valores anteriores.
// Completar la función fibonacciSequence la cuál recibe limit, un entero positivo
// que representa la cantidad de elementos de la serie que queremos.
// La función debe mostrar en consola los elementos de la serie hasta que limit sea alcanzado.

 

//


function fib(n) {
  if (n <= 1) {
    return 1;
  } else{
    return fib(n - 1) + fib(n - 2);
  }
}

function fibonacciSequence(limit) {
  if(limit < 1){
    return console.log("error");
  }  else{
    for(var i = 0; i < limit; i++ ) {
      console.log( fib(i) );
    }
  }
}

fibonacciSequence(5);

 