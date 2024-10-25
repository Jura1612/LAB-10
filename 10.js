const campoEntrada = document.querySelector('input[type="text"]');
const botonAgregar = document.querySelector('button');
const columnas = document.querySelectorAll('.column');

botonAgregar.addEventListener('click', agregarTarea);

function agregarTarea() {
  const textoTarea = campoEntrada.value.trim();
  if (textoTarea) {
    const htmlTarea = `
      <div class="task">
        <span>${textoTarea}</span>
        <i class="fas fa-arrow-right"></i>
        <i class="fas fa-arrow-left" style="display: none;"></i>
      </div>
    `;
    columnas[0].appendChild(crearElementoTarea(htmlTarea));
    campoEntrada.value = '';
  }
}

function crearElementoTarea(htmlTarea) {
  const elementoTarea = document.createElement('div');
  elementoTarea.innerHTML = htmlTarea;
  const flechaDerecha = elementoTarea.querySelector('.fa-arrow-right');
  const flechaIzquierda = elementoTarea.querySelector('.fa-arrow-left');
  flechaDerecha.addEventListener('click', moverTareaAdelante.bind(null, elementoTarea));
  flechaIzquierda.addEventListener('click', moverTareaAtras.bind(null, elementoTarea));
  return elementoTarea;
}

function moverTareaAdelante(elementoTarea) {
  const columnaActual = Array.prototype.indexOf.call(columnas, elementoTarea.parentNode);
  if (columnaActual < columnas.length - 1) {
    columnas[columnaActual + 1].appendChild(elementoTarea);
    elementoTarea.querySelector('.fa-arrow-left').style.display = 'inline-block';
    if (columnaActual === columnas.length - 2) {
      elementoTarea.querySelector('.fa-arrow-right').style.display = 'none';
    } else {
      elementoTarea.querySelector('.fa-arrow-right').style.display = 'inline-block';
    }
  }
}

function moverTareaAdelante(elementoTarea) {
  const columnaActual = Array.prototype.indexOf.call(columnas, elementoTarea.parentNode);

  if (columnaActual < columnas.length - 1) {
      columnas[columnaActual + 1].appendChild(elementoTarea);

      elementoTarea.querySelector('.fa-arrow-left').style.display = 'inline-block';

      if (columnaActual === columnas.length - 2) {
          elementoTarea.querySelector('.fa-arrow-right').style.display = 'none';

          elementoTarea.querySelector('.fa-arrow-left').style.display = 'none';
      } else {
          elementoTarea.querySelector('.fa-arrow-right').style.display = 'inline-block';
      }
  }
}


function moverTareaAtras(elementoTarea) {
  const columnaActual = Array.prototype.indexOf.call(columnas, elementoTarea.parentNode);
  if (columnaActual > 0) {
    columnas[columnaActual - 1].appendChild(elementoTarea);
    elementoTarea.querySelector('.fa-arrow-right').style.display = 'inline-block';
    if (columnaActual === 1) {
      elementoTarea.querySelector('.fa-arrow-left').style.display = 'none';
    } else {
      elementoTarea.querySelector('.fa-arrow-left').style.display = 'inline-block';
    }
  }
}