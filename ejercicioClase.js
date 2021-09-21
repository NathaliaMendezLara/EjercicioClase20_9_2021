//ejercicio de clase: ingreso tres numeros por teclado y envio por consola cual es el mayor de los tres

let numeroA =prompt("ingresa un numero");

let numeroB =prompt("ingresa nuevamente un numero");

let numeroC =prompt("ingresa nuemvente un numero");

numeroA = parseInt(numeroA);
numeroB = parseInt(numeroB);
numeroC = parseInt(numeroC);

if( numeroA > numeroB){
    console.log(numeroA + "es mayor que" + numeroB);
}
else if( numeroB > numeroC){
    console.log( numeroB + " es mayor que" + numeroC);
}
else if( numeroC > numeroA) 
{
    console.log( numeroC + " es mayor que" + numeroA);
}
else( numeroA > numeroC) 
{
    console.log( numeroA + " es mayor que" + numeroC);
}
