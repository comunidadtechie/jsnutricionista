//Selección de los elementos del DOM
//En este fragmento, se están seleccionando tres elementos del Document Object Model (DOM) usando sus IDs. 
//navMenu representa el menú de navegación
//navToggle es el botón para mostrar el menú
//navClose es el botón para cerrar el menú.

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//Evento de clic en el botón de mostrar menú
//Si el elemento navToggle existe en la página (no es nulo), se agrega un evento de clic. 
//Cuando se hace clic en el botón de mostrar menú (navToggle), 
//se agrega la clase CSS "show-menu" al elemento navMenu, lo que hace que el menú de navegación se muestre.

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//Evento de clic en el botón de cerrar menú
//De la misma forma, si el elemento navClose existe, se agrega un evento de clic. 
//Cuando se hace clic en el botón de cerrar menú (navClose), se elimina la clase CSS "show-menu" del elemento navMenu, ocultando así el menú de navegación.
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//Evento de clic en los enlaces del menú
//Acá, se seleccionan todos los elementos con la clase CSS "nav_link" (es decir,los enlaces del menú). 
//Se agrega un evento de clic a cada uno de estos enlaces, que ejecuta la función linkAction. 
//Esta función simplemente oculta el menú de navegación al hacer clic en un enlace.
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

//SWIPER
//Estos fragmentos inicializan dos instancias de Swiper, que son bibliotecas para crear sliders (carruseles) interactivos. 
//Uno es para el .home-swiper y otro para el .new-swiper. 
//Se configuran diferentes opciones como el espacio entre diapositivas, el bucle infinito, la paginación, etc.
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16,
});

//Scroll up (volver arriba)
//Control de aparición del botón de "Volver arriba"
//Esta función se dispara cuando ocurre un evento de desplazamiento en la ventana (scroll). 
//Dependiendo de la posición de desplazamiento vertical (scrollY), se agrega o elimina la clase CSS "show-scroll" en el elemento con el ID "scroll-up". 
//Esto controla cuando apaarece el botón de "Volver arriba" en base a la posición de desplazamiento.
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//Secciones activas
//Marcado activo de las secciones en el menú de navegación
//En este fragmento de código, se seleccionan todas las secciones que tienen un atributo id.
//La función scrollActive se ejecuta cuando se produce un evento de desplazamiento. 
//Dentro de esta función, se verifica la posición de desplazamiento y se agrega la clase "active-link" a los elementos del menú de navegación que corresponden a la sección visible actualmente.
//Se ve un punto debajo del nombre de la sección que estás para identificar que estás pocisionado ahí
const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive)


//Relevación de secciones
//Efecto de revelación al hacer scroll
//Acá, se usanso la librería ScrollReveal para aplicar efectos de revelación mientras se escrolea (deslizo) para abajo. 
//Se configuran distintos efectos para diferentes elementos en la página, como el .home-swiper, .new-swiper, .story_data, etc. 
//Los elementos se revelan cuando alcanzan la parte superior de la pantalla con una distancia, duración y retraso específicos.
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  
});
sr.reveal(`.home-swiper,.new-swiper, .newsletter_container`);
sr.reveal(`.story_data, .trick_content, .footer_content`, {
  interval: 100,
});
sr.reveal(`.about_data, .discount_img`, { origin: "left" });
sr.reveal(`.about_img, .discount_data`, { origin: "right" });
