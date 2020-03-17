const activableSection = document.querySelector('.div');

// Si contiene la clase hidden
if (activableSection.classList.contains('succes')) {
    activableSection.innerHTML=' <h1 >CORRECTO</h1> <p>los datos son correctos</p>';
} else if (activableSection.classList.contains('error')){
    activableSection.innerHTML=' <h1 >ERROR</h1> <p>Ha surgido un error</p>';
 }
else if   (activableSection.classList.add('warning')){
    activableSection.innerHTML=' <h1 >WARNING</h1> <p>Tenga cuidado</p>';
 }


