window.onscroll = function() {
    var navbar = document.getElementById("cont-barra");
    var altura = document.getElementById("cont-cabecera");
    var alturahome = document.getElementById("cont-home");
    if (window.scrollY > (altura.offsetHeight + 35)) {
      navbar.classList.add("fixed-top");
      navbar.classList.add("mt-0");
      alturahome.style.marginTop = ((navbar.offsetHeight)+25) + "px";
    } else {
      navbar.classList.remove("fixed-top");
      navbar.classList.remove("mt-0");
      alturahome.style.marginTop = 0;
    } 
  };
  

  
  function minimiza() {
    var navbarCollapse = document.getElementById("navbarScroll");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  }


        // JavaScript para establecer la fecha actual en el campo de fecha
        const fechaActual = new Date().toISOString().split('T')[0];
        document.getElementById('fecha-nacimiento').value = fechaActual;

        var canvas = document.getElementById('campo-firma');
        var signaturePad = new SignaturePad(canvas, {
            backgroundColor: 'white',
            penColor: 'black',
        });


  