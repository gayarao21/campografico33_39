var modal2 = document.getElementById("myModal-2");
var modale_dradi = document.getElementById("modalImage-2");
var dradi = document.getElementsByClassName("dradi");
var closeModal = document.getElementById("closeModal-2");

for (var i = 0; i < dradi.length; i++) {
    dradi[i].addEventListener("click", function() {
      var imageURL = this.getAttribute("src");
      modale_dradi.setAttribute("src", imageURL);
      modal2.style.display = "block";
    });
}

closeModal.addEventListener("click", function() {
    modal2.style.display = "none";
  });
  
window.addEventListener("click", function(event) {
    if (event.target === modal2) {
      modal2.style.display = "none";
    }
});