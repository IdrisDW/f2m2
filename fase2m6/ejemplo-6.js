

const john = {
  name: 'John',
  birthYear: 1990,
  job: 'Developer'
}


const Person = function(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

const johnPerson = new Person('John', 1990, 'Developer');
const johnPerson = new Person('Erandi', 1990, 'Developer');
const johnPerson = new Person('Santiago', 1990, 'Developer');
const johnPerson = new Person('M  

', 1990, 'Developer');

console.log(johnPerson);