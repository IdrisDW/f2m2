// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// const doubled = []

// for(let i = 0; i < numbers.length; i++) {
//   doubled.push(numbers[i] * 2);
// }

// console.log(numbers); // [1, 3, 4, 7, 2, 1, 9, 0]
// console.log(doubled);  // [2, 6, 8, 14, 4, 2, 18, 0]
// //

// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// const doubled = []

// for(const number of numbers) {
//   doubled.push(number * 2);
// }

// console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
// console.log(doubled)  // [2, 6, 8, 14, 4, 2, 18, 0]

// //

// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// const doubled = []

// for(const number of numbers) {
//   if (number === 1) continue
//   doubled.push(number * 2);
// }

// console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
// console.log(doubled)  // [6, 8, 14, 4, 18, 0]

//

// reto 1 promedio
// let numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
// let num = 0;
// let result;
// for (let number of numbers) {
//   num += number;
// }
// result = num / numbers.length;
// console.log(result);


// const john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   birthYear: 1990
// }


// const john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   birthYear: 1990
// }

// console.log(john.firstName)  // 'John'

// console.log(john['lastName'])  // 'Doe'


// const john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   birthYear: 1990
// }

// console.log(john.firstName)  // 'John'

// john.firstName = 'Jane'

// console.log(john.firstName)  // 'Jane'

// john['firstName'] = 'Joe'

// console.log(john['firstName'])  // 'Joe'

//de objeto a arreglo
// const car = {
//   brand: 'Nissan',
//   model: 'Versa',
//   year: 2020
// }

// const pairs = []

// for(const property in car) {
//   pairs.push( [property, car[property]] )
// }

// console.log(pairs)

// [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]


//reto 2 de arreglo a objeto

// let car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
// let pairs = {}

// for(let p of car) {
//  pairs[p[0]] = p[1]
// }

// console.log(pairs)


// const colors = ['blue', 'red', 'yellow'];
// const copyOfColors = [ ...colors ];

// console.log(copyOfColors); // ['blue', 'red', 'yellow']


// const book = {
//   author: 'Marijn Haverbeke',
//   title: 'Eloquent JavaScript',
//   year: 2018
// };

// const copyOfBook = { ...book };

// console.log(copyOfBook); 
// // { author: "Marijn Haverbeke", title: "Eloquent JavaScript", year: 2018 }





// const colors = ['blue', 'red', 'yellow'];
// const copyOfColors = [ ...colors ];

// console.log(copyOfColors); // ['blue', 'red', 'yellow']




// const book = {
//   author: 'Marijn Haverbeke',
//   title: 'Eloquent JavaScript',
//   year: 2018
// };

// const copyOfBook = { ...book };

// console.log(copyOfBook); 
// // { author: "Marijn Haverbeke", title: "Eloquent JavaScript", year: 2018 }




// const oneToThree = [1, 2, 3];
// const fourToSix = [4, 5, 6];
// const oneToSix = [ ...oneToThree, ...fourToSix ]

// console.log(oneToSix); // [1, 2, 3, 4, 5, 6]



// const oneToThree = [1, 2, 3];
// const oneToSix = [ ...oneToThree, 4, 5, 6 ]

// console.log(oneToSix); // [1, 2, 3, 4, 5, 6]



// const oneToThree = [1, 2, 3];
// const oneToSix = [ 4, 5, 6, ...oneToThree ]

// console.log(oneToSix); // [4, 5, 6, 1, 2, 3]







// const formalGreetings = {
//   english: 'Hello',
//   french: 'Bonjour',
// };

// const informalGreetings = {
//   russian: 'Privet',
//   portuguese: 'Oi'
// }

// const greetings = { ...formalGreetings, ...informalGreetings }

// console.log(greetings); 
// // { english: "Hello", french: "Bonjour", russian: "Privet", portuguese: "Oi" }



// const formalGreetings = {
//   english: 'Hello',
//   french: 'Bonjour',
// };

// const informalGreetings = {
//   russian: 'Privet',
//   portuguese: 'Oi'
// }

// const greetings = { 
//   ...formalGreetings, 
//   ...informalGreetings,
//   english: 'Hi' 
// }

// console.log(greetings); 
// // { english: "Hi", french: "Bonjour", russian: "Privet", portuguese: "Oi" }



// const formalGreetings = {
//   english: 'Hello',
//   french: 'Bonjour',
// };

// const informalGreetings = {
//   russian: 'Privet',
//   portuguese: 'Oi'
// }

// const greetings = { 
//   english: 'Hi', 
//   ...formalGreetings, 
//   ...informalGreetings
   
// }

// console.log(greetings); 
// // { english: "Hello", french: "Bonjour", russian: "Privet", portuguese: "Oi" }





// const colors = [ 'Red', 'Blue', 'Yellow' ]

// const [ red, blue, yellow ] = colors;

// console.log(red); // Red
// console.log(blue); // Blue
// console.log(yellow); // Yellow



// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   country: 'Unknown'
// };

// const firstName = person.firstName;
// const lastName = person.lastName;

// console.log(firstName, lastName); // John Doe


// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   country: 'Unknown'
// };

// const { firstName, lastName } = person;

// console.log(firstName, lastName); // John Doe



// const person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// const { firstName, country = 'Unknown' } = person;

// console.log(firstName, country); // John Unknown



// const person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// const { firstName: name } = person;

// console.log(name); // John 



// const person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// const { firstName: name,  country: ctry = 'Unknown'} = person;

// console.log(name, ctry); // John Unknown

//reto 3
const person = {
  firstName: 'John',
  lastName: 'Doe',
  links: {
    web: {
      blog: 'https://johndoe.com'
    }, 
    social: {
      facebook: 'https://facebook.com/john.doe',
      instagram: 'https://instagram.com/john.doe'
    } 
  }
}


  const urls= { facebook: fb, instagram: ig } = person.links.social


console.log(  fb,ig)  ;