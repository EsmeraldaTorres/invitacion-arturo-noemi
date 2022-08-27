const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

function abrir() {
  // animaciones que se hicieron con animate.css (link en html 45, también lo instalé con npm animate....)
  // La imagen del sobre de arriba(index 67), se levanta y desaparece
  document.getElementById("sobre-arriba").classList.add("animate__fadeOutUp");
  // La imagen del sobre de abajo(index 74) se desliza hacia abajo y desaparece
  document.getElementById("sobre-abajo").classList.add("animate__slideOutDown");
  // codigo que pausa la repeticiín infinita de la animacion pulso del boton A&N
  document.getElementById("btn-open").classList.remove("animate__infinite");

  // función para que las cosas no pasen rápido :D
  setTimeout(function () {
    //codigo que elimina el boton A&N
    document.getElementById("btn-open").classList.add("hide");
    // Clase hide es display none para el div que contiene los 3 elementos del sobre
    // (index 63)
    // y también hace que ya no se vea el div Padre de background negro (index 57)
    document.getElementById("hoja-principal").classList.add("hide");
    // remueve el display none de la invitacion para que sea visible (index 88)
    document.getElementById("invitacion").classList.remove("hide");
    // El audio se reproduce pero como estoy en pruebas, no he subido bien el nombre
    // del archivo para que no se reproduzca mucho
    audio.play();
  }, 2500);
}

// auidio

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

// Cuenta regresiva -------------------------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date("Nov 20, 2022 20:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="cuenta p-4" >
  <span>${days} días</span>
  <span class="ml-2 mr-2"> : </span>  
  <span>${hours} hrs</span> 
  <span class="ml-2 mr-2"> : </span>   
  <span>${minutes} min</span>
  <span class="ml-2 mr-2"> : </span>  
  <span>${seconds} seg</span> 
    </div>
  </div>
    `;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// carousel
