
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
  