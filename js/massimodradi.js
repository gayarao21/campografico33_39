var modal3 = document.getElementById("myModal-3");
var modale_massimo= document.getElementById("modalImage-3");
var massimo = document.getElementsByClassName("massimo");
var closeModal = document.getElementById("closeModal-3");

for (var i = 0; i < massimo.length; i++) {
    massimo[i].addEventListener("click", function() {
      var imageURL = this.getAttribute("src");
      modale_massimo.setAttribute("src", imageURL);
      modal3.style.display = "block";
    });
}

closeModal.addEventListener("click", function() {
    modal3.style.display = "none";
  });
  
window.addEventListener("click", function(event) {
    if (event.target === modal3) {
      modal3.style.display = "none";
    }
});