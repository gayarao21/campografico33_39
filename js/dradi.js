var modald = document.getElementById("dradiModal");
var modale_dradi = document.getElementById("modalImaged");
var dradi = document.getElementsByClassName("dradi");
var closeModal = document.getElementById("close");

for (var i = 0; i < dradi.length; i++) {
    dradi[i].addEventListener("click", function() {
      var imageURL = this.getAttribute("src");
      modale_dradi.setAttribute("src", imageURL);
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