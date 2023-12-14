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
