let precioBase = 2000;
let edad_18=0.1, casado_18=0.1, hijosRecargo1= 0.1;
let edad_25=0.2, casado_25=0.2, hijosRecargo2= 0.2;
let edad_50=0.3, casado_50=0.3, hijosRecargo3= 0.3;
let recargo = 0
let recargoTotal = 0
let precioFinal = 0


let nombre = prompt("Ingrese su nombre, por favor")
let edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
let casado = prompt("¿Está casado actualmente?")

let edadConyuge = 0

if("SI" == casado.toUpperCase()){
  edadConyuge = prompt("¿Que edad tiene su conyuge?")
}

let edad_numero = parseInt(edad)
let edadConyuge_numero = 0
if("SI" == casado.toUpperCase()){
  edadConyuge_numero = parseInt(edadConyuge)
  Calculo(`${casado_18}`, `${casado_25}`, `${casado_50}`);
}

let hijos = prompt("¿Tiene hijos o hijas?")
let cantidadHijos = 0
if("SI" == hijos.toUpperCase()){
    cantidadHijos = prompt("cuantos hijos tiene? ")
    Calculo(`${hijosRecargo1}`, `${hijosRecargo2}`, `${hijosRecargo3}`);
  }
let cantidadHijos_numero = parseInt(cantidadHijos)

function Calculo (){
if(edad_numero>=18 && edad_numero<25){
  recargo = precioBase * edad_18
  recargoTotal = recargoTotal + recargo
}
else if (edad_numero>=25 && edad_numero<49){
    recargo = precioBase * edad_25
    recargoTotal = recargoTotal + recargo
}
else if (edad_numero>=50){
    recargo = precioBase * edad_50
    recargoTotal = recargoTotal + recargo
}
};
Calculo()



precioFinal = precioBase + recargoTotal
alert ("Para el asegurado  "+nombre)
alert ("El recargo total sera de:  "+recargoTotal)
alert ("El precio final sera de:  "+precioFinal)
let reinicio = prompt("Quiere realizar otra cotizacion?", "SI-SALIR")
if ("SI"==reinicio.toUpperCase()){
    setInterval("location.reload()", 500)
}
else if ("SALIR"==reinicio.toUpperCase()){
    alert("Gracias por cotizar con seguros Galileo S.A.")
}