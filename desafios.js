//Crear una funcion que muestre "Hola mundo" en la consola.

function saludo(){
    console.log("Hola Mundo!");
}

saludo();

//Crear una funcion que reciba nombre como parametro y muestre "Hola [nombre]" en la consola.

function saludoNombre(nombre){
    console.log(`Hola ${nombre}`);
}

saludoNombre("Sergio");

//Crear una funcion que reciba un numero como parametro y devuelva el doble de ese numero.

function numeroDoble(numero){

    return numero * 2;

}

let resultado = numeroDoble(4);
console.log(resultado);

//Crear una funcion que reciba tres numeros como parametro y devuelva el promedio.

function promedioNumeros(num1, num2, num3){

    return (num1 + num2 + num3) / 3;

}

let promedio = promedioNumeros(9,5,6);
console.log(promedio);

//Crear una funcion que reciba dos numeros como parametro y devuelva el mayor de ellos.

function numeroMayor(num1, num2){
    if(num1 > num2){
        console.log(`El numero ${num1} es mayor que el numero ${num2}`);
    }else{
        console.log(`El numero ${num2} es mayor que el numero ${num1}`)
    }
    
    //Metodo mas corto
    //return a > b ? a : b;
}

numeroMayor(9,20);

//Crear una funcion que reciba un numero como parametro y devuelva el resultado de multiplicar ese numero por si mismo.

function cuadradoNumero(numero){
    return numero * numero;
}

let result = cuadradoNumero(5);
console.log(result);


//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros
// y peso en kilogramos, que se recibirán como parámetros.

function indiceMasaCorporal(peso, altura){

    return peso / (altura * altura);
}

console.log(indiceMasaCorporal(68, 1.65));

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero){
    let factor = 1;
    for(i = 1; i<=numero;i++){
        factor *= i;
    }

    return factor;
}

let resultado1 = factorial(5);
console.log(resultado1);


function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado3 = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado3}`);

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor
//equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
//Para esto, considera la cotización del dólar igual a R$4,80.

function conversorMoneda(dolares){
    let cotizacionDolar = 4.80;
    return dolares * cotizacionDolar; 
}

console.log(conversorMoneda(50));

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
//utilizando la altura y la anchura que se proporcionarán como parámetros.

function area(alto, ancho){
    return alto * ancho;
}

function perimetro(alto, ancho){
    return (alto*2) + (ancho*2);
}

console.log(`El area del rectanguolo es ${area(2,3)}`);
console.log(`El perimetro de la sala es ${perimetro(2,3)}`);

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaCirculo(radio){
    let pi = 3.14;
    return pi * (radio*radio);
}
function perimetroCirculo(radio){
    let pi = 3.14;
    return pi * (radio+radio);
}

let areaDeCirculo = areaCirculo(3);
console.log(areaDeCirculo);
let perimetroDeCirculo = perimetroCirculo(3);
console.log(perimetroDeCirculo);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numero){
    let resultado = 0;
    for(i=1; i <= 10; i++) {
        resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`);
    }
}

tablaMultiplicar(2);

//Crea una lista vacia llamada "listaGenerica"

let listaGenerica = [];

//Crea una lista de lenguajes de programacion llamada "lenguajesDeProgramacion" con los siguientes elementos
//'JavaScript','C','C++','Kotlin',''Python

let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];

//Agrega a la lista "lenguajesDeProgramacion" los siguientes elementos 'Java','Ruby','GoLang'

lenguajesDeProgramacion.push('Java','Ruby','GoLang');
console.log(lenguajesDeProgramacion);

//Crea una funcion que muestre en la consola todos los elementos de la lista " "

function mostrarElementos(){

    for(i=0; i < lenguajesDeProgramacion.length;i++){
        console.log(lenguajesDeProgramacion[i]);
    }

}

mostrarElementos();

//Crea una funcion que muestre en la consola todos los elementos de la lista " " en orden inverso
function mostrarElementosInverso(){

    for(i=lenguajesDeProgramacion.length-1; i >= 0;i--){
        console.log(lenguajesDeProgramacion[i]);
    }
    
}

mostrarElementosInverso();

//Crea una funcion que calcule el promedio de los elementos en una lista de numeros 
let numeros = [3,6,5,8,10,7];

function calcularPromedio(numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        //console.log(numeros[i]);
        suma += numeros[i];
        //console.log(suma);
    }
    let promedio = suma / numeros.length;
    return promedio;
}

let mostrarPromedio = calcularPromedio(numeros);
console.log(mostrarPromedio);

//Crea una funcion que muestre en consola el numero mas grande y el numero mas pequeño en una lista



//Crea una funcion que devuelva la suma de todos los elementos en una lista 

//Crea una funcion que devuelva la posicion en la lista donde se encuentra un elemento pasado como parametro
//, o -1 si no existe en la lista

//Crea una funcion que reciba dos listas de numeros del mismo tamaño y devuelva una nueva lista con la suma
//de los elementos uno a uno


//Crea una funcion que reciba una lista de numeros y devuelva una nueva lista con el cuadrado de cada numero









