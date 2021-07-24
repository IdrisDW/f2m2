//  reto 1
const time = 123;
let greeting;

if ( time >= 0 && time < 12) {
  greeting = "Good morning";
} else if (time >= 12 && time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time < 24) {
  greeting = "Good evening";
}else {

    greeting = "Error !";
}

console.log(greeting) // Good afternoon




















//  reto 2
  
 for(let i = 0; i <= 100; i++) {
    if( i % 2 == 0 ) {
      console.log( i );
    }
  }
















  


//  reto 3
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false ) {
        if (counter==0 || counter ==1){
            continue;
        }
                console.log(  counter);
    }
}
//
// for (let counter = 2; counter <= 100; counter++) {
//     let isPrime = true;
  
//     for (let i = 2; i <= counter; i++) {
//       if (counter % i === 0 && i !== counter) {
//         isPrime = false;
//       }
//     }
  
//     if(isPrime) console.log(counter)
//   }
  
//  from here 

const day = 2;
let text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";

}

console.log(text); // Tuesday



for(let i = 0; i<=200; i++){
    console.log("Hello World");
  }
  












  // EJERCICIO
//   Crea un script en donde dado el diámetro de una rueda y su grosor (en número) y
// a través de condicionales if realice las siguientes operaciones:
// - Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
// - Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
// - Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
// - Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8,
//   con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”


 
let diametro, grosor;
let msg;
diametro = 2;
grosor = 1;
if ( diametro >= 1.4  ) {
  msg ="La rueda es para un vehículo grande" ;
} else if (diametro  <= 1.4 && diametro > 0.8) {
  msg = "La rueda es para un vehículo mediano";
} else if ((diametro >= 1.4 && grosor < 0.4) || (diametro<= 1.4 && diametro> 0.8 && grosor<0.25)   ) {
  msg = "El grosor para esta rueda es inferior al recomendado";
}else {

  msg = "Error !";
}

console.log(msg);




