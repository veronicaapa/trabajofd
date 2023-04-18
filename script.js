const btnMostrarMapa = document.getElementById('btnMostrarMapa');
const mapa = document.getElementById('map');

btnMostrarMapa.addEventListener('click', () => {
  if (mapa.classList.contains('oculto')) {
    mapa.classList.remove('oculto');
  } else {
    mapa.classList.add('oculto');
  }
});


/* --- Formulario multi Step --- */

function sig1() {
  let nombreCliente = document.getElementById("nombreInput").value;
  let apellidoCliente = document.getElementById("apellidoInput").value;
  let emailCliente = document.getElementById("emailInput").value;
  let telefonoCliente = document.getElementById("telefonoInput").value;

  if (nombreCliente != "" && apellidoCliente != "" && emailCliente != "" && telefonoCliente != "") {
    document.getElementById("paso2").classList.add("active");
    document.getElementById("paso1").classList.remove("active");
  }
};

function sig2() {
  let provinciaCliente = document.getElementById("provinciaInput").value;

  if (provinciaCliente != ""){
    document.getElementById("paso2").classList.remove("active");
    document.getElementById("paso3").classList.add("active");
  }
};

function sig3() {
  let nombreCliente = document.getElementById("nombreInput").value;
  let apellidoCliente = document.getElementById("apellidoInput").value;
  let emailCliente = document.getElementById("emailInput").value;
  let telefonoCliente = document.getElementById("telefonoInput").value;
  let provinciaCliente = document.getElementById("provinciaInput").value;
  let localidadCliente = document.getElementById("localidadInput").value;
  let cpCliente = document.getElementById("cpInput").value;
  let sugerenciaCliente = document.getElementById("sugenrenciaInput").value;
  
  if(sugerenciaCliente != "")
  {
  document.getElementById("paso3").classList.remove("active");
  document.getElementById("paso4").classList.add("active");

  document.getElementById("nombreText").innerHTML = nombreCliente;
  document.getElementById("apellidoText").innerHTML = apellidoCliente;
  document.getElementById("emailText").innerHTML = emailCliente;
  document.getElementById("telefonoText").innerHTML = telefonoCliente;
  document.getElementById("provinciaText").innerHTML = provinciaCliente;
  document.getElementById("localidadText").innerHTML = localidadCliente;
  document.getElementById("cpText").innerHTML = cpCliente;
  document.getElementById("sugerenciasText").innerHTML = sugerenciaCliente;
  } else {
  document.getElementById("aviso").innerHTML = "* Debe completar el campo de texto SUGERENCIA";
  }
};

function back1() {
  document.getElementById("paso2").classList.remove("active");
  document.getElementById("paso1").classList.add("active");
};

function back2() {
  document.getElementById("paso3").classList.remove("active");
  document.getElementById("paso2").classList.add("active");
};

function back3() {
  document.getElementById("paso4").classList.remove("active");
  document.getElementById("paso3").classList.add("active");
};

function generapdf(){

//--- Captura datos de Inputs
var nombrePdf = document.getElementById("nombreInput").value,
    apellidoPdf = document.getElementById("apellidoInput").value,
    emailPdf = document.getElementById("emailInput").value,
    telefonoPdf = document.getElementById("telefonoInput").value,
    provinciaPdf = document.getElementById("provinciaInput").value,
    localidadPdf = document.getElementById("localidadInput").value,
    cpPdf = document.getElementById("cpInput").value,
    sugerenciaPdf = document.getElementById("sugenrenciaInput").value;


//--- Generacion de PDF
var doc = new jsPDF();
var logo = new Image();
logo.src = '/img/logos/logo-floower-negro.png';

doc.setFontSize(22);
doc.addImage(logo, 50, 0, 100, 20);

doc.setFontSize(16);
doc.text("Nombre: " + nombrePdf, 10, 30);
doc.text("Apellido: " + apellidoPdf, 10, 40);
doc.text("Email: " + emailPdf, 10, 50);
doc.text("Telefono: " + telefonoPdf, 10, 60);
doc.text("Provincia: " + provinciaPdf, 10, 70);
doc.text("Localidad: " + localidadPdf, 10, 80);
doc.text("Codigo Postal: " + cpPdf, 10, 90);
doc.text("Sugerencia: " + sugerenciaPdf, 10, 100);
doc.setFontSize(8);
doc.text("El documento es generado automatocamente, por lo tanto es unico para su control.", 10, 150);

//--- Salva archivo PDF
doc.save("sugerencia-floower.pdf")

}



/* --- Fin Formulario Multi Step --- */