//CONSTRUCTORES

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


//RETO1
// Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y, 
//ambos valores numéricos que deben ser las propiedades del objeto.

// Agregar los siguientes métodos al prototype de Vec:

// plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.

// minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.

// length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).

// const Vec = function(x, y) {
//   // Code goes here...
//   this.x = x;
//   this.y = y;
// }
// Vec.prototype.plus = function(other) {
//   return new Vec(this.x + other.x, this.y + other.y);
// }

// Vec.prototype.minus = function(other) {
//   return new Vec(this.x - other.x, this.y - other.y);
// }

// Vec.prototype.length = function(other) {
//   //return  new Vec(Math.sqrt(this.x * this.x + this.y * this.y));
//   // notquite return  new Vec(Math.sqrt(this.x * other.x + this.y * other.y));
//   return Math.sqrt(this.x * this.x + this.y * this.y);
// }


// const vec1 = new Vec(1, 2);
// const vec2 = new Vec(2, 3);

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979
// // Para calcular la distancia desde (0, 0) hasta (x, y) se puede usar el teorema de Pitágoras: √(x2 + y2). 
// //En JavaScript existe el método Math.sqrt para calcular raíces cuadradas.



// ejemplo2
//herencia

// const Person = function(name) {
//   this.name = name;
// }

// const john = new Person('John');


// const Developer = function(skills, yearsOfExperience) {
//   this.skills = skills;
//   this.yearsOfExperience = yearsOfExperience;
// }



// const Person = function(name) {
//   this.name = name;
// }

// const Developer = function(name, skills, yearsOfExperience) {
//   Person.call(this, name);

//   this.skills = skills;
//   this.yearsOfExperience = yearsOfExperience;
// }


// const john = new Developer('John', 'JavaScript', 10);

// console.log( john );


// const Person = function(name,school) {
//   this.name = name;
//   this.school = school;
// }

// const Developer = function(name, skills, yearsOfExperience) {
//   Person.call(this, name);

//   this.skills = skills;
//   this.yearsOfExperience = yearsOfExperience;
// }

// const john = new Developer('John', 'JavaScript', 10);
// const edwin = new Developer('John', 'JavaScript', 10);
// console.log( edwin);
// edwin.school = "de la vida"
// console.log(edwin);
// console.log(edwin instanceof Person);
// console.log(edwin instanceof Developer);


//reto 2
// Crear un function constructor Group el cual crea una lista (arreglo) vacía.

// Agregar los siguientes métodos a Group:

// add: Agrega un nuevo valor al grupo solo si no existe.

// has: Retorna un booleano indicando si el valor es un miembro del grupo.

// from: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo.
 

// const myGroup = function() {
//   this.myList= [];
// }

// myGroup.prototype.add = function(value) {
//   if (!this.has(value)) {
//     this.myList.push(value);
//   }
// }

// myGroup.prototype.has = function(value) {
//   return this.myList.includes(value);
// }

// myGroup.from = function(myArray) {
//   const group = new myGroup();

//   for(let i = 0; i < myArray.length; i++) {
//     group.add(myArray[i]);
//   }
//   return group;
// }

// const group = myGroup.from([1, 2, 3, 4, 5]);
// console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
// console.log(group.has(5)); // true
// console.log(group.has(10)); // false
// group.add(10);
// console.log(group.has(10)); // true

//something
// const Person = function(name,birthYear,job) {
//   this.name = name;
//   this.birthYear = this.birthYear;
//   this.job = job;
// }
// Person.prototype.calculateAge= function(){
//   const today = new Date ();
//   const year = today.getFullYear();
//   console.log(year - this.birth);
// }

// const johnPerson = new Person('john', 1990, 'developer');
// const erandi = new Person('erandi', 2005, 'lee');
// const santi = new Person ('santi', 2003 , 'ta');
// const mariano = new Person('mariano', 2002, 'ta');
 
const Triangle = function(a, b, c) {
this.a =  a;
this.b =   b;
this.c = c;
}
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

const triangle = new Triangle(1, 2, 3);

console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6