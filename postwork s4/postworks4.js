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
    if (Object.keys(a).length != Object.keys(b).length){
        return false;
    }else{
        for (let item of Object.keys(a)) {
            if (!Object.keys(b).includes(item) || !deepEqual(a[item], b[item])){
                return false;
            }else{
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
      temp .push(item);
    }
    return temp ;
}



const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]