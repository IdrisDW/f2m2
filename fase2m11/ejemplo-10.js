// function startProcess() {
//     console.log('Start Phase 1. Wait one second...');
//     setTimeout(function () {
//       console.log('Phase 1 completed.');
//     }, 1000);
//   }
  
//   startProcess();
  
// function startProcess() {
//     console.log('Start Phase 1. Wait one second...');
//     setTimeout(function () {
//       console.log('Phase 1 completed. Wait two seconds...');
//       setTimeout(function () {
//         console.log('Phase 2 completed.');
//       }, 2000);
//     }, 1000);
//   }
  
//   startProcess();

  

// function startProcess() {
//     console.log('Start Phase 1. Wait one second...');
//     setTimeout(function () {
//       console.log('Phase 1 completed. Wait two seconds...');
//       setTimeout(function () {
//         console.log('Phase 2 completed. Wait three seconds...');
//         setTimeout(function () {
//           console.log('Phase 3 completed. Wait four seconds...');
//           setTimeout(function () {
//             console.log('Phase 4 completed.');
//             // More asynchronous calls...
//           }, 4000);
//         }, 3000);
//       }, 2000);
//     }, 1000);
//   }
  
//   startProcess();
  

// function foo() {
//     return new Promise((resolve) => {
//       // Async operations...
//     //  resolve(value);
//       resolve(' asd + asd ');
//     })
//   }
  
//   foo().then(value => console.log(value)); // value created in foo()


//   function foo() {
//     return new Promise((resolve, reject) => {
//       // Async operations...
//       reject(new Error('Process Failed'));
//     })
//   }
  
//   foo()
//     .then(value => console.log(value))
//     .catch(error => console.log(error)); // error produced in foo()



// function addOne(value) {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(value + 1), 500)
//     })
//   }
  
//   addOne(1)
//     .then(result => {
//       console.log(result) // 2
//       return addOne(result)
//     })
//     .then(result => {
//       console.log(result) // 3
//       return Promise.reject('Oops!')
//     })
//     .catch(err => {
//       console.log(err) // Oops!
//       return addOne(1)
//     })
//     .then(result => {
//       console.log(result) // 2
//       return addOne(result)
//     })
//     .then(result => console.log(result)); // 3
  
//reto1
// function promiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         let arrap = [];
//         let count = promises.length;
//         for (let i = 0; i < promises.length; i++) {
//           promises[i].then(result => {
//             arrap[i] = result;
//             count--;
//             if (count == 0) resolve(arrap);
//           }).catch(reject);
//         }
//         if (promises.length == 0) resolve(arrap);
//       });
//     }
   
  
  
//   function soon(value) {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(value), 1000)
//     })
//   }
  
//   // Test cases
//   promiseAll([])
//     .then(arrap => {
//       console.log('Expected result []: ', arrap)
//     })
  
//   promiseAll([soon(1), soon(2), soon(3)])
//     .then(arrap => {
//       console.log('Expected result [1, 2, 3]: ', arrap)
//     })
  
//   promiseAll([soon(1), Promise.reject('X'), soon(3)])
//     .then(arrap => {
//       console.log('We should not get here')
//     })
//     .catch(error => {
//       console.log('Expected error X: ', error)
//     })
  //ejemplo2
// function foo() {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve('Hello World'), 1000)
//     })
//   }
  
//   async function bar() {
//     let result = await foo()
    
//     console.log(result)
//   }
  
//   bar()
// function foo() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => reject('Failed'), 1000)
//     })
//   }
  
//   async function bar() {
//     try {
//       let result = await foo()
//     } catch (e) {
//       console.log(e)  
//     }
//   }
  
//   bar()
  
//reto2
// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 'Hello World';
//   }
  
//   function log(value) {
//     // Code goes here...
//     wait().then(result => console.log(result));
//   }
  
//   log()
  

// Don't alter this function
const processAction = (i, callback) => {
    setTimeout(function() {
      callback("Processed Action " + i);
    }, Math.random()*1000);
  }
  
  const triggerActions = (count) => {
    var triggerAction = function (i) {     
        if (i <= count) {                    
          processAction(i, function (text) { 
            console.log(text);             
            triggerAction(i + 1);            
          });                                
        }                                   
      }                                     
      triggerAction(1);                     
    }
    
  
  
  triggerActions(10);