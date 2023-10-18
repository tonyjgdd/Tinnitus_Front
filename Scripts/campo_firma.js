  // JavaScript para establecer la fecha actual en el campo de fecha
  const fechaActual = new Date().toISOString().split('T')[0];
  document.getElementById('fecha-nacimiento').value = fechaActual;

  var canvas = document.getElementById('campo-firma');
  var signaturePad = new SignaturePad(canvas, {
      backgroundColor: 'white',
      penColor: 'black',
  });

  