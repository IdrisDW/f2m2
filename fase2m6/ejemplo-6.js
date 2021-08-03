

// const john = {
//   name: 'John',
//   birthYear: 1990,
//   job: 'Developer'
// }


// const Person = function(name, birthYear, job) {
//   this.name = name;
//   this.birthYear = birthYear;
//   this.job = job;
// }

// const johnPerson = new Person('John', 1990, 'Developer');
// const johnPerson = new Person('Erandi', 1990, 'Developer');
// const johnPerson = new Person('Santiago', 1990, 'Developer');
// const johnPerson = new Person('M  

// ', 1990, 'Developer');

// console.log(johnPerson);




// const john = {
//     name: 'John',
//     birthYear: 1990,
//     job: 'Developer'
//   }
  
//   const Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//   }
//   //const jane = new Person('Jane', 1975, 'Designer');
//   const Persons = [
//       new Person('John', 1990, 'Developer');
//     new Person('Mark', 1985, 'Teacher');
  
   
  
//   ]
//   Persons.push(new Person('John', 1990, 'Developer'))
   
//   console.log(typeof mark);
//   console.log( mark instanceof Person);
//   console.log( mark instanceof Array);
//   console.log( mark instanceof Number);



// Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y, 
//ambos valores numéricos que deben ser las propiedades del objeto.

// Agregar los siguientes métodos al prototype de Vec:

// plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.

// minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.

// length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).

const Vec = function(x, y) {
  // Code goes here...
  this.x = x;
  this.y = y;
}
Vec.prototype.plus = function(other) {
  return new Vec(this.x + other.x, this.y + other.y);
}

Vec.prototype.minus = function(other) {
  return new Vec(this.x - other.x, this.y - other.y);
}

Vec.prototype.length = function(other) {
  //return  new Vec(Math.sqrt(this.x * this.x + this.y * this.y));
  // notquite return  new Vec(Math.sqrt(this.x * other.x + this.y * other.y));
  return Math.sqrt(this.x * this.x + this.y * this.y);
}


const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
// Para calcular la distancia desde (0, 0) hasta (x, y) se puede usar el teorema de Pitágoras: √(x2 + y2). 
//En JavaScript existe el método Math.sqrt para calcular raíces cuadradas.

