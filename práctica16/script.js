var titulo = document.getElementById("titulo");
titulo.innerHTML = "Feliz regreso de vacaciones";

var texto;
texto = document.querySelector("#texto");
texto.innerHTML = "Tristin";
texto.style.fontSize = "50px";
texto.style.backgroundColor = "red";

var colores;
colores = document.getElementById("colores");
colores.style.color = "purple";
colores.style.display = "none";
colores.style.display = "block";

function cambiarColor() {
  console.log("Si entro la funcion", 5 + 10);
  colores.style.color = "brown";
}

cambiarColor();

document.write("Este es un numero generado con JS:");
document.write(40 / 23);

// window.alert("Esta es una alerta");

var cadena = "Hola desde la consola";
console.log(cadena);
console.log("Solo para desarrolladores");

let a,b,c;
a = 5;
b = 6;
c = a + b;
console.log(c);

var radio = 10;
const PI = 3.1416;

function calcularArea(){
    let areaTemporal = PI * radio * radio;
    return areaTemporal;
}

console.log(calcularArea());

let numero = 10.5;
let numeroNuevo = 10;

let soyCadena = 'jeje';
let soyCadena1 = 'jeje';
let soyCadena2 = 'jeje';

let $multi_plica = numero * numeroNuevo;
let sinValor;
console.log(sinValor);

let variableLocal = 10;

{
  let variableLocal = 2;
  console.log('Variable local: ' + variableLocal);
}
console.log('Variable local numero 2  : ' + variableLocal);

const autos = ["WV", "Chevrolet", "BMW",10,true,"Hola","mundo"]; 
console.log(autos);
console.log(autos[2]);
console.log(autos[6]);
console.log(autos[4]);
console.log(autos.length);  

const autoNuevo = {
  tipo : "Toyota Carry",
  modelo : 500,
  color : "Blanco"
}

console.log(autoNuevo);
console.log(autoNuevo.color);
autoNuevo.color = "Rojo";
console.log(autoNuevo.color);

var x1 = 4.5;
console.log(typeof x1);

var y1 = 10;
console.log(typeof y1);

var z1 = 'Hola';
console.log(typeof z1);
console.log(typeof autos);
console.log(typeof autoNuevo);

console.log(5 * 15);
console.log(3 > 10);

console.log("Thor" > "Iron Man");
console.log("a" > "b");
console.log("de" > "bc");
console.log(true && false);
console.log(true && true);

console.log(false || true);

console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

let edad = 18;

edad > 20 ? "Verdadero" : "Falso";

if(edad > 20)
{
  console.log("Verdadero");
}
else
{
  console.log("Falso");
}

console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);

let valor = 0;
while( valor <= 12) {
  console.log(valor);
  valor++;
}

for(let numero = 0; numero <=12; numero++){
  console.log(`For: ${numero}`);
}