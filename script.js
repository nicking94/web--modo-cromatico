//SWIPER

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 1000,
    loop: true,
  },
});

//FILTRO
$(document).ready(function () {
  //cambiar el active
  $('.filtros .item[categoria="todos"]').addClass("activo");
  $(".item").click(function () {
    var catProduct = $(this).attr("categoria");

    //se remueve el activo al que ya lo tiene y agrega activo al hacer click
    $(".item").removeClass("activo");
    $(this).addClass("activo");

    //ocultar productos
    $(".producto").css("transform", "scale(0)");
    function ocultarProductos() {
      $(".producto").hide();
    }
    setTimeout(ocultarProductos, 100);

    //mostrar determinados productos al clickear
    function mostrarProductos() {
      $('.producto[categoria="' + catProduct + '"]').show();
      $('.producto[categoria="' + catProduct + '"]').css(
        "transform",
        "scale(1)"
      );
    }
    setTimeout(mostrarProductos, 100);
  });

  $('.item[categoria="todos"]').click(function () {
    function mostrarTodos() {
      $(".producto").show();
      $(".producto").css("transform", "scale(1)");
    }
    setTimeout(mostrarTodos, 100);
  });

  //animacion

  // Prevenir el comportamiento predeterminado del enlace
  $('a[href="#"]').click(function (event) {
    event.preventDefault();
  });
});

//MODAL

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgModal");
var closeBtn = document.getElementsByClassName("close")[0];

// Función para mostrar la imagen en el modal
function mostrarImagen(imgElement) {
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Función para cerrar el modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Cierra el modal si se hace clic fuera de él
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
