const btnMostrarMapa = document.getElementById('btnMostrarDiscord');
const Discord = document.getElementById('Discord');

btnMostrarMapa.addEventListener('click', () => {
  if (Discord.classList.contains('oculto')) {
    Discord.classList.remove('oculto');
  } else {
    Discord.classList.add('oculto');
  }
});
