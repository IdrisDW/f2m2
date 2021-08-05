// // reto de la sesion 6
// // Reto Inicial: implementar una clase que funcione como stack (first in, last out ) en donde tenga 4 metodos:
// // push, pop, peek, print. Una vez lograda la estructura de stack, se debera simular una estructura de queue
// // (first in first out) usando solo la estructura de stack creada anteriormente. Hint: se necesita utilizar dos stacks.
// // Le queue solo debera cumplir la funcion de FIFO

 

//kinda
 

const myStackF = function () {
  this.stacky = [];
};
myStackF.prototype.push = function (x) {
  //console.log("From stackf input : ", x);
  this.stacky.push(x);
};

myStackF.prototype.pop = function () {
  this.stacky.pop();
};
//const lastItem = colors[colors.length - 1]
myStackF.prototype.peek = function () {
  console.log(this.stacky[0]);
};

myStackF.prototype.print = function () {
  console.log([...this.stacky]);
};


class retoInicial {
    constructor() {
      this.fStack = new myStackF();
      this.sStack = new myStackF();
    }
  
    enqueue(x) {
  
     for (let x of this.fStack.stacky){
       this.sStack.push(this.fStack.pop());
      }
  
     this.fStack.push(x);
     for(let x of this.sStack.stacky) {
       this.fStack.push(this.sStack.pop());
  
     }
   
    }
  
    dequeue() {
     
      if (this.fStack.length == 0)
      {
        console.log("vacia");
      }
    else{
      return this.fStack.pop();
    }
      
  }
    
  
    print() {
      this.fStack.print();
    }
  }

  //outputs..

let obj = new retoInicial();
let obj2 = new myStackF();
obj.enqueue("a");
obj.enqueue("b");
obj.enqueue("c");
obj.enqueue("d");
obj.print();
obj.dequeue();
obj.print();

obj2.push(1);
obj2.push(2);
obj2.push(3);
obj2.push(4);
 obj2.print();
 console.log("after pop");
 obj2.pop();
 obj2.print();
 console.log("after peek");
 obj2.peek();
 obj2.print();
 