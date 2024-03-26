
   document.querySelectorAll(".linksNav ul li").forEach(function(item) {
    item.addEventListener("mouseover", function() {
      // Quando o hover é ativado, adiciona uma classe 'not-hover' a todos os outros itens
      document.querySelectorAll(".linksNav ul li").forEach(function(otherItem) {
        if (otherItem !== item) {
          otherItem.classList.add("not-hover");
        }
      });
    });
  
    
    item.addEventListener("mouseout", function() {
      // Quando o hover é desativado, remove a classe 'not-hover' de todos os itens
      document.querySelectorAll(".linksNav ul li").forEach(function(otherItem) {
        otherItem.classList.remove("not-hover");
      });
    });
  });


var sliders = document.querySelector(".carrossel"); 
var btnEsquerdo = document.querySelectorAll(".leftBtn");
var btnDireito = document.querySelectorAll(".rigthBtn")
var scrollClick = 200; // Valor para o scroll
var scrollInterval;
var scrollAmount = 0;

function carrosselEsquerda() {
  sliders.scrollLeft -= scrollClick;
  if (sliders.scrollLeft < 0) {
    sliders.scrollLeft = 0;
  }
}

function carrosselDireita() {
  if (sliders.scrollLeft >= (sliders.scrollWidth - sliders.clientWidth - scrollClick)) {
    sliders.scrollLeft = 0; // Volta para o início
  } else {
    sliders.scrollLeft += scrollClick;
  }
}




function startAutomaticScroll() {
  scrollInterval = setInterval(carrosselDireita, 3500); // Inicia o scroll automático a cada 2 segundos
}

function stopAutomaticScroll() {
  clearInterval(scrollInterval);
}

// Inicia o scroll automático quando a página carregar
window.addEventListener('load', startAutomaticScroll);

// Pára o scroll automático quando o mouse passar por cima do carrossel
sliders.addEventListener('mouseenter', stopAutomaticScroll);

// Retoma o scroll automático quando o mouse sair do carrossel
sliders.addEventListener('mouseleave', startAutomaticScroll);

