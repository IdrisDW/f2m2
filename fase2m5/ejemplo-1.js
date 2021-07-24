

// //scope global
// const name = "John Doe";

// console.log(name); // "John Doe"

// function foo() {
//   console.log(name); 
// }

// foo(); // "John Doe"


// //scope local

// function foo() {
//     const bar = "John Doe";
//     console.log(bar); 
//   }
  
//   foo(); // "John Doe"
  
//   console.log(bar); // Uncaught ReferenceError: name is not defined
  
//   // Ejemplo 1: Block scope

//   if(true) {
//     var foo = "John Doe"
  
//     console.log(foo) // "John Doe"
//   }
  
//   console.log(foo) // "John Doe"
  
//   // another ex1
//   var numbers = [1, 2, 3, 4, 5]
// var doubles = []

// for(var i = 0; i < numbers.length; i++) {
//   doubles.push(numbers[i] * 2)
// }

// console.log(numbers) // [1, 2, 3, 4, 5]
// console.log(doubles) // [2, 4, 6, 8, 10]
// console.log(i) // 5


// if(true) {
//     const foo = "John Doe"
  
//     console.log(foo) // "John Doe"
//   }
  
//   console.log(foo) // Uncaught ReferenceError: foo is not defined

//   //
//   const numbers = [1, 2, 3, 4, 5]
//   const doubles = []
  
//   for(let i = 0; i < numbers.length; i++) {
//     doubles.push(numbers[i] * 2)
//   }
  
//   console.log(numbers) // [1, 2, 3, 4, 5]
//   console.log(doubles) // [2, 4, 6, 8, 10]
//   console.log(i) // Uncaught ReferenceError: i is not defined
  



// // Execution context

// //Ejemplo 2: Execution Context a detalle


// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function(birthYear) {
//       const today = new Date()
//       const year = today.getFullYear()
//       return year - birthYear
//       }
//   }
  
//   john.calculateAge();


//   john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function() {
//       const today = new Date()
//       const year = today.getFullYear()
//       this.age = year - this.birthYear
//     }
//   }

//   console.log( john );
// /*
// Valor actual
// {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1990,
//   calculateAge: ƒ
// }
// */

 

// console.log( john );
// /*
// Después de llamar el método calculateAge()
// {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1990,
//   age: 31,
//   calculateAge: ƒ
// }
// */

//  john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: () => {
//       const today = new Date()
//       const year = today.getFullYear()
//       this.age = year - this.birthYear
//     }
//   }
//   john.calculateAge();
//   console.log( john );


//Reto 1: Extraer una lista de propiedades

// var singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   ];
  
//   function pluck(list, propertyName) {
//     // Code goes here...
//     let array  = [];
//     for (let i = 0; i < list.length; i++){
//      array.push(list[i] [propertyName]);
//     }
//     return array;
//   }
  
//   console.log( pluck(singers, 'name') );
//   // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
//   console.log( pluck(singers, 'band') );
//   // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
//   console.log( pluck(singers, 'born') );
//   // [1948, 1950, 1967, 1964]
  


  //Reto 2: Crear un número de teléfono


//   Escribir una función que reciba un arreglo de 10
//    enteros entre 0 - 9, y retorne un string en forma de
//     número telefónico.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); 
// // "(123) 456-7890"
// La función debe retornar el mismo formato, incluyendo 
// el espacio después del paréntesis.

function createPhoneNumber(numbers){
numbers = numbers.join('');
 return '(' + numbers.substring(0, 3) + ') '   
 + numbers.substring(3, 6) + '-' + numbers.substring(6);
  }
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) );

















//Reto 3: Encontrar elementos faltantes
// Escribir una función que reciba un arreglo de n 
// cantidad de enteros positivos que pueden no estar
//  ordenados. La función debe retornar un nuevo arreglo 
//  con los elementos faltantes del primer arreglo.

// findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]

// const findMissingNumbers = (numbers) => {
//     let missing = [];
//     // Find the missing array items
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i + 1] - numbers[i] > 1) {
//         missing.push(numbers[i + 1] - numbers[1]);
//       }
//     }
//     return missing;
//   };

// console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10]));

 
function findMissingNumbers(numbers) {
    const sortedArray = numbers.sort((a, b) => a - b)
    let missing = []
    for (let i = numbers[0]; i < numbers[sortedArray.length - 1]; i++) {
      if (sortedArray.indexOf(i) < 0) {
        missing.push(i);
      }
    }
    return missing
  }
  

console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10]));