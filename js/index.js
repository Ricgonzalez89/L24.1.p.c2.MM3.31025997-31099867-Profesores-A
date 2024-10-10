/* PROFESORES-A
|* En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
|* un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
|* que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
|* de la clase Cl_profesor.
|* Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total.
|* Ejemplos de la corrida:
|* Nombre del profesor fijo: Carlos
|* Monto del bono: $25
|* Monto del sueldo: $100
|* Ingreso total del profesor Carlos: $125
|* Nombre del profesor fijo: Carolina
|* Monto del bono: $40
|* Monto del sueldo: $90
|* Ingreso total del profesor Carolina: $130
*/
import Cl_contratado from "./Cl_contratado.js";
import Cl_fijo from "./Cl_fijo.js";

let prof1 = new Cl_fijo("Carlos", 25, 100);
let prof2 = new Cl_fijo("Carolina", 40, 90);

let salida = document.getElementById("salida");

salida.innerHTML += `
<br>Nombre del profesor fijo: ${prof1.nombre}
<br>Ingreso total del profesor ${prof1.nombre}: $${prof1.calcIngresoTotal()}
<br>
<br>Nombre del profesor fijo: ${prof2.nombre}
<br>Ingreso total del profesor ${prof2.nombre}: $${prof2.calcIngresoTotal()}
`;
