
  

var canvas = document.getElementById('campo-firma');
var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'transparent', // Fondo transparente
    penColor: 'blue',
});

// Configura la imagen de fondo
var backgroundImage = new Image();
backgroundImage.src = 'img/campo.png' // Cambia esto a la ruta correcta de tu imagen de fondo
backgroundImage.onload = function () {
    canvas.getContext('2d').drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

var botonBorrar = document.getElementById('borrarCanvas');
botonBorrar.addEventListener('click', function () {
    signaturePad.clear();
    canvas.getContext('2d').drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
});


function cargarImagen(input, idVistaPrevia) {
    const vistaPrevia = document.getElementById(idVistaPrevia);
    if (input.files && input.files[0]) {
        const lector = new FileReader();
        lector.onload = function (e) {
            vistaPrevia.src = e.target.result;
        };
        lector.readAsDataURL(input.files[0]);
    }
}