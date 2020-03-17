var numero;
numero=parseInt(prompt('Ingrese un numero'));
if (numero===0) {
    console.log('El número es 0')
  } else if (numero<0) {
    console.log('El número es negativo')
  } else if (numero>20 && numero<50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }