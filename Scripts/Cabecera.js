window.onscroll = function() {
    var cardContainer = document.getElementById("card");
    var scrollY = window.scrollY;
    if (scrollY > cardContainer.offsetTop) {
        cardContainer.classList.add("fixed-top");
    } else {
        cardContainer.classList.remove("fixed-top");
    }
};


  
  function minimiza() {
    var navbarCollapse = document.getElementById("navbarScroll");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  }


  