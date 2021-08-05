// // reto de la sesion 6
// // Reto Inicial: implementar una clase que funcione como stack (first in, last out ) en donde tenga 4 metodos:
// // push, pop, peek, print. Una vez lograda la estructura de stack, se debera simular una estructura de queue
// // (first in first out) usando solo la estructura de stack creada anteriormente. Hint: se necesita utilizar dos stacks.
// // Le queue solo debera cumplir la funcion de FIFO

// var x = [1,2,2,3,2];
//  var stackF= function() {
//      this.stack = [];
// };

// stackF.prototype.push = function(x) {
//      this.stack.push(x);
// };

// stackF.prototype.pop = function() {
//     this.stack.pop();
// };

// stackF.prototype.peek = function() {
//   return this.stack[this.stack.length - 1];
// };

//  stackF.prototype.print = function() {
//   return console.log(this.stack);
// };

// var obj = new stackF()
//  obj.push(x)
//   var param_2 = obj.pop()
//  var param_3 = obj.peek()
//  var param_4 = obj.print()

// const Queue = () => {
//     const queue = []
//     return {
//       get length() {
//         return queue.length
//       },
//       push: x => queue.push(x),
//       pop: () => queue.shift(),
//       top: () => queue[0],
//     }
//   }
//   const MyStack = function () {
//     this.queue = Queue()
//   }

//   /**
//    * Push element x onto stack.
//    * @param {number} x
//    * @return {void}
//    */
//   MyStack.prototype.push = function (x) {
//     if (this.queue.length === 0) {
//       this.queue.push(x)
//     } else {
//       this.queue.push(x)
//       for (let i = 1; i <= this.queue.length - 1; i++) {
//         this.queue.push(this.queue.pop())
//       }
//     }
//   }

//   /**
//    * Removes the element on top of the stack and returns that element.
//    * @return {number}
//    */
//   MyStack.prototype.pop = function () {
//     return this.queue.pop()
//   }

//   /**
//    * Get the top element.
//    * @return {number}
//    */
//   MyStack.prototype.top = function () {
//     return this.queue.top()
//   }

//   /**
//    * Returns whether the stack is empty.
//    * @return {boolean}
//    */
//   MyStack.prototype.empty = function () {
//     return this.queue.length === 0
//   }

// MY ONE

// const myStackF = function () {
//   this.stacky = [];
// };
// myStackF.prototype.push = function (x) {
//   this.stacky.push(x);
// };

// myStackF.prototype.pop = function () {
//   this.stacky.pop();
// };

// myStackF.prototype.peek = function () {
//   this.stacky[0];
// };

// myStackF.prototype.print = function () {
//   console.log(myStackF);
// };

// const MyQueuey = function () {
//   this.queue = myStackF();
// };

// MyQueuey.prototype.push = function (x) {
//   this.queue.push(x);
// };

// MyQueuey.prototype.shift = function () {
//   this.queue.shift();
// };

// var x = ["2","132","213"];
//   var obj = new myStackF()
//    obj.push(x)
//   var param_2 = obj.pop()
//  var param_3 = obj.peek()
//   var param_4 = obj.print()
// class qe{

        
// myConstructor(){
//     this.fStack = [];
//     this.sStack= [];
// }
  
//      eQueuey(x)   {
//         while (this.fStack.length != 0)
//         {
//             this.sStack.push(this.fStack.pop());   
//         }

//             this.fStack.push(x);        
            
//             while (this.sStack.length != 0)
//             {
//                 this.fStack.push(this.sStack.pop());
            
//             }
//     }

//      dQueuey() {  
//         if (this.sStack.length == 0)
//         {
//          console.log("vacia");
//         }
        
//         let x = this.fStack[this.fStack.length - 1];
//         this.fStack.pop();
//         return x;
//     }
 
// }
 
// let obj =  new qe();
// obj.eQueuey("a");
// obj.eQueuey("b");
// obj.eQueuey("c");
//  obj.dQueuey();
 







class retoInicial {
    constructor() {
      this.fStack = [];
      this.sStack = [];
    }
  
    enqueue(x) {
        console.log("from class ingresando el valor: " , x);
      this.fStack.push(x);
    }
  
    dequeue() {
      if (this.sStack.length === 0) {
  
      
        while (this.sStack.length > 0) {
          const item= this.sStack.pop();
          this.sStack.push(item);
        }
  
     
        if (this.sStack.length === 0) {
         console.log("vacia ");
        }
      }
      return this.sStack.pop();
    }
  }



  
const myStackF = function () {
  this.stacky = [];
};
myStackF.prototype.push = function (x) {
  this.stacky.push(x);
};

myStackF.prototype.pop = function () {
  this.stacky.pop();
};
//const lastItem = colors[colors.length - 1]
myStackF.prototype.peek = function () {
  this.stacky[0];
};

myStackF.prototype.print = function () {
  console.log([...this.stacky]);
};

const MyQueuey = function () {
  this.queue = myStackF();
};

MyQueuey.prototype.push = function (x) {
  this.queue.push(x);
};

MyQueuey.prototype.shift = function () {
  this.queue.shift();
};

let obj = new retoInicial();
obj.enqueue("a");
obj.enqueue("b");
obj.enqueue("c");
obj.enqueue("d");
let obj2 = new myStackF();
obj2.push(1);
obj2.push(2);
obj2.push(3);
obj2.push(4);
obj2.print();
console.log(obj2.pop());
console.log(obj2.peek());
console.log(obj2.print());