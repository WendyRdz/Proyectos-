// /* // //sin condicionales el codigo se ejecuta de arriba hacia abajo
// // var hola = 'hola';
// // console.log(hola);
// // console.table(1, 2, 3);
// // console.error('HUbo un error');
// // //console.clear();
// // console.time('Hola');
// // console.timeEnd('Hola');

// //formas de crear variables
// //una variable solo empieza con letras, puede llevar numeros al final o antes sin usar signos extraños
// //CamelCase nombreCliente
// // //Underscore nombre_cliente
// // //pascal case NombreCliente
// // var nombreMio = 'Wendy';
// // var edad = 25;


// // console.log(nombreMio, edad);

// // var nombreCliente = 'wendy'
// // var nombreCliente = 'juan'
// // console.log(nombreCliente);
// // // con let no puedes reasignar un valor a una variable con var si 

// // let nombre; //asignas aqui o despues el valor, aplican las mismas formas de definir valores que javascript
// // nombre = 'wendy';
// // console.log(nombre);

// //Diferencia let,bvar,const

// // const cliente = 'marisol' // no puedes cambiar el valor despues, se usa cuando seleccionamos elementos del HTML
// // console.log(cliente);

// // const divMensaje = document.getElementById('Mensaje');

// // .split divide el texto en secciones y saca la cantidad 
// //

// // let nombre;
// // let actividad = 'Estoy aprendiendo javascript';
// // nombre = actividad.replace('javascript', 'js');

// // console.log(nombre);

// const numero1 = 30,
//     numero2 = "20",
//     numero3 = 20.20,
//     numero4 = -3,
//     numero5 = 20;

// let resultado;

// resultado = numero1 + numero5;
// resultado = numero1 * numero5;
// /* // resultado = numero1 / numero5;
// // resultado = numero1 - numero5;

// // //math
// // resultado = Math.round(2.5); //redondea hacia arriba

// // resultado = Math.floor(2.99); // redondea hacia abajo

// // resultado = Math.ceil(2.01); // 

// // //raiz cuadrada
// // resultado = Math.sqrt(144);
// // resultado = Math.abs(numero4);
// // resultado = Math.pow(8, 3); //
// // resultado = Math.min(10, 2, 4, 60, 5); //minimo de los numeros
// // resultado = Math.max(10, 2, 4, 60, 5); //numero maximo


// // //incrementos o decrementos

// // let puntaje = 0;




// // console.log(resultado);

// // //de numero a string

// // let dato = 19883928329389;

// // dato = string(dato);

// // console.log(dato);
// // console.log(dato.length);


// // //Arrays
// // const numeros =  [10, 20, 30, 40, 50,];
// // console.table(numeros);

// // const meses = new Array('enero', 'febrero','Marzo');

// // meses.push('Abril'); //agrear elemento al final del Array
// // meses.unshift('Mes 0'); //agregar elemento al inicio del Array

// // meses.pop(); //quita el ultimo elemento del array
// // meses.shift(); //quita el primer elemento del array

// // meses.splice(0,1);//eliminar un rango del array
// // meses.reverse(); //cambia el orden del array


// // let frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];
// // frutas.sort();//ordena en orden alfabeticos

// // console.log(frutas);

// // console.log(meses); */



// //Creando Objetos utilizan llaves

// const persona = { //object literal
//     nombre: 'Wendy',
//     apellido: 'Rodriguez',
//     edad: 25,
//     trabajo: false,
//     musica: ['Rock', 'Metal', 'Ska'],
//     hogar: { //se pueden agregar objetos dentro de un objeto de esta manera
//         ciudad: 'Monterrey',
//         país: 'Mexico'
//     }
// }

// console.log(persona); //acceder a un valor o  propiedad de un objeto ejemplo: persona.edad,
// // acceder a un array seria musica[la posicion a acceder]
// //acceder a una propiedad dentro del objeto hogar seria persona.hogar.ciudad o sintaxis como array ejemplo: persona['hogar]['ciudad];



// //Template strings en javascript

// const nombre = ' wendy',
//     trabajo = 'Desarrolladora web';

// //manera de concatenar #1
// console.log('nombre' + nombre + ', trabajo' + trabajo);
// //manera de concatenar #2 con template string
// console.log(`nombre: ${nombre}, trabajo: ${trabajo}`);
// //

// const contenedorApp = document.querySelector('#mensaje');

// let html = '<ul>' + //opcion 1
//     '<li>nombre' + nombre + '</li>' +
//     '<li>trabajo' + trabajo + '</li>' +
//     '</ul>';

// //opcion 2
// let html2 = `<ul>  
//             <li>nombre: ${nombre}</li>
//             <li>trabajo: ${trabajo}</li>

//             </ul>`
// contenedorApp.innerHTML = html2;



// //Funciones
// //funtion declaration
// //aqui si permite definir saludar() antes 

// function saludar() {
//     //cuerpo de la funcion
//     console.log('Hola');
// }
// suma();

// //llamar la funcion, ventajas es que las puedes llamar muchas veces
// saludar();

// //function expression
// //aqui no permite definir suma() antes 

// const suma = function() {
//     console.log(1 + 2);
// }
// */
//pasar parametros a una funcion es tomar parametros que esten afuera 

function saludar(nombres, trabaja = 'No sabemos') {
    console.log(' Hola ' + nombres + ' Tu trabajo es' + trabaja);
}
saludar('Wendy Marisol', 'Desarrollo web');
saludar('Marisol', 'Desarrollo PHP');
saludar('Wendy Marisol', 'Desarrollo web');
saludar('Desarrollo Android');
}

const suma = function(a = 0, b = 0) {
    console.log(a + b);
}
suma(10, 20);
suma(100, 200);

//IIFE se invocan inmediantemente sin mandarlas llamar

(function(tecnologia) {
    console.log('Aqui estoy!! aprendiendo' + tecnologia);
})('javascript');

//metodos o funciones dentro de los objetos
const musica = { //objeto
        reproducir: function(cancion) {
            console.log('Reproduciendo la cancion:' + cancion);
        },
        pausar: function() {
            console.log('paused...');
        }
    }
    //los metodos tambien pueden ir por fuera
musica.borrar = function(id) {
    console.log('Borrando la cancion' + id);
}

}
musica.reproducir('Hotel californa'); //mandar llamar parametros
musica.pausar();
musica.reproducir('Nothing else matters');
musica.borrar(121);


//Funciones que retornan un valor
const suma = function(a = 0, b = 0) {
    return a + b;

}

const multiplicar = function(a) {
    return a * 5;
}

let total;
let resultadoSuma = suma(1 + 3);
total = multiplicar(resultadoSuma);
console.log(total);


// Arrow functions

let viajando = function(destino) {
    return "Viajando a la ciudad de: " + destino;
}

let viaje;
viaje = viajando('Londres');
console.log(viaje);

//conversion cuando retornas un valor y cuando tomas un parametro
let viajando = () => "Viajando a la ciudad de: " + destino;


let viaje;
viaje = viajando('Londres');
console.log(viaje);


//object constructor y palabra This

//object literal
const persona = {
    nombre: 'Wendy'

}
console.log(persona)


//object literal con THIS

const persona = {
    nombre: 'Wendy',
    edad: 25,
    anioNacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }

}
console.log(persona.anioNacimiento());



//otra manera con funcion Object constructor

function Tarea(nombre, urgencia) {
    this.nombre = nombre; //this es para saber a que instancia pertenece 
    this.urgencia = urgencia;
}
//crear nuevas tareas
const tarea1 = new Tarea('Prender Js', 'Urgente');
const tarea2 = new Tarea('Preparar café', 'Urgente');
const tarea3 = new Tarea('Preparar clases', 'Medio');
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);

//en una clase es una nueva forma 
class Tarea {
    constructor(nombre, urgencia) {
        this.nombre = nombre; //this es para saber a que instancia pertenece 
        this.urgencia = urgencia;
    }

    //Fechas en Javascript

    //Fecha de Hoy

    const diaHoy = new Date();

    let valor = diaHoy;
    //retorna el numero del mes
    valor = diaHoy.getMonth();
    //retorna el numero del día
    valor = diaHoy.getDay();
    //retorna el numero del  día mes
    valor = diaHoy.getDate();
    //retorna el año en el que estamos
    valor = diaHoy.getFullYear();
    //retorna los minutos de las horas
    valor = diaHoy.getMinutes();
    //retorna  las horas
    valor = diaHoy.getHours();
    //timespamp
    valor = diaHoy.getTime();
    // reescribir el valor de la fecha 
    valor = diaHoy.setFullYear(1998);

    console.log(valor);


    //otra manera, new date es igual a MES,DIA,AÑO para saber que dia fue determinado dia de determinado año
    const unDia = new Date('1-5-1987');

    let valor;
    valor = unDia.getDay();
    console.log(valor)

































































    suma(30, 50);