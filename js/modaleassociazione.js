var modal = document.getElementById("myModal");
var modale_grizzanti = document.getElementById("modalImage");
var grizzanti = document.getElementsByClassName("grizzanti");
var closeModal = document.getElementById("closeModal");

for (var i = 0; i < grizzanti.length; i++) {
    grizzanti[i].addEventListener("click", function() {
      var imageURL = this.getAttribute("src");
      modale_grizzanti.setAttribute("src", imageURL);
      modal.style.display = "block";
    });
}

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });
  
window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
});

var modal = document.getElementById("myModal");
var modale_chiabrando= document.getElementById("modalImage");
var chiabrando = document.getElementsByClassName("chiabrando");
var closeModal = document.getElementById("closeModal");

for (var i = 0; i < chiabrando.length; i++) {
    chiabrando[i].addEventListener("click", function() {
      var imageURL = this.getAttribute("src");
      modale_chiabrando.setAttribute("src", imageURL);
      modal.style.display = "block";
    });
}

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });
  
window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
});

var modal = document.getElementById("myModal");
var modale_massimo= document.getElementById("modalImage");
var massimo = document.getElementsByClassName("massimo");
var closeModal = document.getElementById("closeModal");

for (var i = 0; i < massimo.length; i++) {
    massimo[i].addEventListener("click", function() {
      var imageURL = this.getAttribute("src");
      modale_massimo.setAttribute("src", imageURL);
      modal.style.display = "block";
    });
}

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });
  
window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
});