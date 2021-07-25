// Deep Equal:
// Escribir una función llamada deepEqual que reciba dos
//argumentos y retorne true si son el mismo valor o si
// son objetos con las mismas propiedades,
//  en este último caso los valores de las propiedades
//deben ser comparados con una
// llamada recursiva de deepEqual.

// Usando el operador typeof puedes determinar si ambas
// variables son objetos, de ser así se debe llamar
//nuevamente deepEqual para comparar las propiedades de
// dichos objetos, en caso contrario solo es necesario
//revisar si ambas variables son estrictamente iguales.

// La función Object.keys() es útil para obtener las
// propiedades de los objetos.

function deepEqual(a, b) {
  if (a === b) {
    return true;
  } else if (typeof a != "object" && typeof b != "object") {
    return false;
  }
  if (Object.keys(a).length != Object.keys(b).length) {
    return false;
  } else {
    for (let item of Object.keys(a)) {
      if (!Object.keys(b).includes(item) || !deepEqual(a[item], b[item])) {
        return false;
      } else {
        return true;
      }
    }
  }

  //  return true;
}

let john = {
  firstName: "John",
  lastName: "Doe",
};

console.log("Test 1:", deepEqual(1, 1)); // true
console.log("Test 2:", deepEqual(1, "1")); // false
console.log("Test 3:", deepEqual(john, john)); // true
console.log("Test 4:", deepEqual(john, { firstName: "John", lastName: "Doe" })); // true
console.log("Test 5:", deepEqual(john, { firstName: "John" })); // false

// Chunk:
// Escribir una función chunk que recibe un arreglo y un número entero size. La función debe dividir el arreglo
//en múltiples arreglos del tamaño determinado por size.

//  function chunk(array, size) {
//   // Code goes here
// };

// const data = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
// console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
// console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

// works..

function chunk(array, size) {
  let temp = [];
  for (let i = 0; i < array.length; i = i + size) {
    let item = array.slice(i, i + size);
    temp.push(item);
  }
  return temp;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Test 1:", chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log("Test 2:", chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log("Test 3:", chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

// Frequency:
// Escribir una función frequency que recibe un string como argumento. Esta función debe contar la frecuencia o el número de
//  veces que se repite cada carácter.

// El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia.
//  Los resultados deben ordenarse de manera ascendente por los caracteres y no la frecuencia.

// function frequency(string) {
//     // Code goes here
//    }

//    console.log('Test 1:', frequency('cccbbbaaa'))
//    // {a: 3, b: 3, c: 3}
//    console.log('Test 2:', frequency('www.bedu.org'))
//    // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
//    console.log('Test 3:', frequency('john.doe@domain.com'))
//    // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}

//  function frequency(string) {
//      let  myObj = new Object();

//  // Code goes here
// //  let ch;
// //  let counted = 0;
// //   for (let i = 0; i < string.length; i++) {
// //     if (string[i] == string[i]) {
// //       counted += 1;
// //     }
// //   }
// //   return counted;
//  let count;
//  let ch ;
// for (var i = 0; i < string.length; i++) {
//     console.log("here " ,string[i]);
//      if (string[i] == string.charAt(i)){
//     //     count +=1;
//     //     //myObj.count = count;
//     }
//     console.log("count : "+ count);
//     myObj.charr = string.charAt(i);
//                     // myObj.ccount = string.charAt();
//                     //  console.log(string.charAt(i));
//   console.log(myObj);
// }

// }
//works
function frequency(string) {
  let countt = {};
  let ch;
  for (let  i = 0; i < string.length; i++) {
    ch= string.charAt(i);
    if (countt[ch]) {
      countt[ch]++;
    } else {
      countt[ch] = 1;
    }
  }

  return countt;
}

//trying to sort it out
function frequency(string) {
    let countt = {};
    let csort = {};
    let ch;
    for (let  i = 0; i < string.length; i++) {
      ch= string.charAt(i);
      if (countt[ch]) {
        countt[ch]++;
      } else {
        countt[ch] = 1;
      }
    }
    

    function sortObjectByKeys(o) {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    }
   
    csort=sortObjectByKeys(countt); 
    return csort;
   
  }

console.log("Test 1:", frequency("cccbbbaaa"));
// {a: 3, b: 3, c: 3}
console.log("Test 2:", frequency("www.bedu.org"));
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log("Test 3:", frequency("john.doe@domain.com"));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
