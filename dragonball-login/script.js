

// function saludar() {
//     let nombre = document.getElementById("nombre").value;

//     if (nombre === "") {
//         alert("Por favor, ingresa tu nombre.");
//     } else {
//         alert("Holaa, bienvenido " + nombre);
//     }

// }



// function validarPassword() {
//     let a = 124;
//     let password = document.getElementById("password").value;

//     if (password === "") {
//         alert("Por favor, ingresa tu contraseña.");
//     } else {
//         if (password == a) {
//             alert("Contraseña correcta, bienvenido.");
//             window.location.href = "inicio.html";
//         } else {
//             alert("Contraseña incorrecta, inténtalo de nuevo.");
//         }
//     }
// }

let primerNumero = parseInt(prompt("ingresa el primer numero"));
let segundoNumero = parseInt(prompt("ingresa el segundo numero"));

let suma = primerNumero + segundoNumero;
console.log(`la suma es: ${suma}`);
let resta = primerNumero - segundoNumero;
console.log(`la resta es: ${resta}`);
let multiplicacion = primerNumero * segundoNumero;
console.log(`la multiplicacion es: ${multiplicacion}`);

if(primerNumero > segundoNumero) {
    console.log(`el primer numero ${primerNumero} es el mayor`);
} else if(primerNumero < segundoNumero) {
    console.log(`el segundo numero ${segundoNumero} es el mayor`);
} else {
    console.log(`los numeros son iguales`);
}