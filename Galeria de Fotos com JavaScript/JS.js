var Posicao_slides = 1;

//Passar Slides
function Mostrar_Slides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {
    Posicao_slides = 1
  }
  if (n < 1) {
    Posicao_slides = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[Posicao_slides - 1].style.display = "block";
}

// Passar e voltar
function Passar_Slides(n) {
  Mostrar_Slides(Posicao_slides += n);
}

