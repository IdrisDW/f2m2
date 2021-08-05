// const numbers = [1, 2, 3, 4, 5];
// const doubles = [];

// for(var i = 0; i < numbers.length; i++) {
//   doubles.push(numbers[i] * 2);
// }

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]


// const numbers = [1, 2, 3, 4, 5];
// const doubles = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]



// const car = {
//   brand: 'Nissan',
//   model: 'Sentra',
//   year: 2021
// }
// function addColor(car) {
//   const newCar = Object.assign({}, car, {
//     color: 'Black'
//   });
//   return newCar;
// }

// console.log('Before calling addColor()', car);

// const sameCar = addColor(car);

// console.log('After calling addColor()', car);
// console.log('After calling addColor()', sameCar);

// console.log('Same car?', car === sameCar); // true


// function add(a, b) {
//   return a + b;
// }

// function randomNumber() {
//   return Math.floor(Math.random() * 10);
// }



// function addItemToCart(cart, item, quantity) {
//   const newCart = cart.map(function(element) {
//     return element;
//   });

//   newCart.push({
//     item: item,
//     quantity: quantity
//   })

//   return newCart;
// }


// const numbers = [1, 2, 3, 4, 5];
// const doubles = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0); // Initial value

// console.log(sum); // 15


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0); // Initial value

// console.log(sum); // 15


// function sumDigits(number) {
//   return number
//          .toString()
//          .split('')
//          .map(Number)
//          .reduce(function(a, b) {
//            return a + b;
//          }, 0)
// }

// console.log(sumDigits(12345)); // 15


// function flatten(arrays) {
//   return arrays.reduce(function(acc, current) {
//     return acc.concat(current);
//   }, []);
// }

// const arrays = [[1, 2, 3], [4, 5], [6]];
// const array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]
