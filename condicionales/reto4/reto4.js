var edad_perro;
var perro;
edad_perro=parseInt(prompt('Ingrese la edad_perro'));
if (edad_perro===1) {
    console.log('El número es 15')
  } else if (edad_perro==2) {
    console.log('El perro tiene 24 años')
  } else if (edad_perro>3) {
    perro=edad_perro-3;
    edad_perro= 29 +(5*perro);
    console.log('El perro tiene '+ edad_perro);
  } 