const btnMostrarMapa = document.getElementById('btnMostrarMapa');
const mapa = document.getElementById('map');

btnMostrarMapa.addEventListener('click', () => {
  if (mapa.classList.contains('oculto')) {
    mapa.classList.remove('oculto');
  } else {
    mapa.classList.add('oculto');
  }
});