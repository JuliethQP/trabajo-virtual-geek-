(activableSection.classList.contains('success')) ? activableSection.innerHTML='<h1>CORRECTO</h1><p>Los datos son correctos</p>' : '<h1>NOTIFICACIÓN</h1><p>Mensaje por defecto</p>';

(activableSection.classList.contains('error') ? activableSection.innerHTML=' <h1 >ERROR</h1> <p>Ha surgido un error</p>':'<h1>NOTIFICACIÓN</h1><p>Mensaje por defecto</p>'


(activableSection.classList.add('warning')) ? activableSection.innerHTML=' <h1 >WARNING</h1> <p>Tenga cuidado</p>': '<h1>NOTIFICACIÓN</h1><p>Mensaje por defecto</p>'

