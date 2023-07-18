// Estructuras de datos
// Arreglo
// Una lista de elementos ordenadas
// Su principal caracteristica es el uso de indices comenzando con el 0
// llegando a tener n numero de elementos
// se posicionan de acuerdo a como vayan siendo ingresados al arreglo

// Sintaxis: let arreglo = [] // esta es la más común
// Sintaxis: let arreglo = new Array(numero de elementos);

// Ejemplo: 
// Guardar la lista de nombres de alumnos

// Posicionamiento  0,     1,         2,          3,      4,        5
// Ultimo elemento n-1, donde n es el total de elementos
let alumnos = ["Pedro", "Alex", "Christopher", "Ivan", "Adrian", "Enrique"];

// total de elementos
// length: longitud del arreglo
// sintaxis: arreglo.length

// valor de posiciones
// []
// sintaxis: arreglo[posicion]

alumnos[5] // "Enrique"
alumnos[0] // "Pedro"
alumnos[6] // undefined

// fijar valores a posiciones
// [] =
// sintaxis: arreglo[indice] = nuevo valor

alumnos[3] = "German";

// valor de posiciones en string
// []
// sintaxis: arreglo[posicion]
let nombre = "Jesus";
//012345 
 "Jesus" // 5
nombre[2] // "s"

nombre = "J es us";
//0123456
 "J es us" // 7
nombre[2] // "e"

// metodo split
// sintaxis: string.split(caracter de patrón de corte)

// ejemplo:
const cadena = "anita lavo la tina, sin necesidad de mojarse"
const nuevoArreglo = cadena.split(",");
// ["anita lavo la tina", " sin necesidad de mojarse"]

// metodo push
// metodo de los arreglos que me permite agregar más elementos a mis arreglo original
// sintaxis: arreglo.push(valor)

// ejemplo
alumnos.push("Javier")

// metodo pop
// metodo de los arreglos que me permite obtener el ultimo elemento de mi arreglo
// pero lo eliminara de la lista
// sintaxis: arreglo.pop()

// metodo reverse
// invierte el orden de los elementos
// sintaxis: arreglo.reverse()

// metodo shift
// metodo de los arreglos que me permite obtener el primer elemento de mi arreglo
// pero lo eliminara de la lista
// sintaxis: arreglo.shift()

// ejemplo
/**
 * ["Pedro", "Alex", "Christopher", "Ivan", "Adrian", "Enrique"];
 * alumnos.shift() // "Pedro"
 * ["Alex", "Christopher", "Ivan", "Adrian", "Enrique"];
 */

// let asistentes= [];
// let next = true;

// while(next) {
//   const nombres = prompt(`Bienvenidos a nuestro evento, coloque su nombre para darle acceso
//   nombre: `);

//   if (nombres !== "") {

//     asistentes.push(nombres)
  
//     console.log("asistentes: ", asistentes.length)
//   }

//   const respuesta = prompt("registrar un nuevo asistente: s/n")

//   next = respuesta === "s"
// }

// forEach
// metodo de los arreglos que nos permite iterar los elementos del arreglo original
// sintaxis: arreglo.forEach()

// alumnos.forEach(function(elemento, indice, array) {
//   console.log(elemento, indice, array);
// });


// for(iniciador, finalizador, iterador)
// for (let i = 0; i <= (alumnos.length - 1); i++) {
//   console.log(alumnos[i], i, alumnos);
// }

//  ejemplo: guardar elementos de un arreglo en otro
let numeros = [3,4,5]
let todosNumeros = [1,2,6,7,8];

// [1,2,6,7,8,[3,4,5]] 
// [1,2,6,7,8,3,4,5] 
// todosNumeros.concat(numeros)


// let asistentes2= [];
// let next2 = true;

// while(next2) {
//   const nombres = prompt(`Bienvenidos a nuestro evento, coloque su nombre para darle acceso, si viene acompañado favor de enlistar a todos sus acompañantes separados por coma,
//   ejemplo: Pedro, antonio, miguel, juan, sandro

//   nombre: `);

//   if (nombres !== "") {

//     if(nombres.indexOf(",") >= 0) { // indice de la posicion, si no existe me regresa un -1, de lo contrarios regresa el indice de la posicion
//       const allNombres = nombres.split(",");
//       for (let i = 0; i <= allNombres.length-1; i++) {
//         asistentes2.push(allNombres[i])
//       }
//     } else {
//       asistentes2.push(nombres)
//     }
//     console.log("asistentes: ", asistentes2.length)
//   }
//   const respuesta = prompt("registrar un nuevo asistente: s/n")

//   next2 = respuesta === "s"
// }



