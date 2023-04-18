function contactopdf(){

    //--- Captura datos de Inputs
    var nombrePdf = document.getElementById("nombre").value,
        emailPdf = document.getElementById("email").value,
        telefonoPdf = document.getElementById("telefono").value,
        asuntoPdf = document.getElementById("assunto").value,
        mensajePdf = document.getElementById("mensaje").value;
    
    //--- Generacion de PDF
    var doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text("Formulario de Contacto", 20, 10);
    
    doc.setFontSize(16);
    doc.text("Nombre: " + nombrePdf, 10, 20);
    doc.text("Email: " + emailPdf, 10, 40);
    doc.text("Telefono: " + telefonoPdf, 10, 50);
    doc.text("Asunto: " + asuntoPdf, 10, 60);
    doc.text("Mensaje: " + mensajePdf, 10, 70);
    
    //--- Salva archivo PDF
    doc.save("contacto-floower.pdf")
    
    }