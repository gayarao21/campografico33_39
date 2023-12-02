var modal = document.getElementById("myModal");
var modale_rossi = document.getElementById("modalImage");
var rossi = document.getElementsByClassName("rossi");
var closeModal = document.getElementById("closeModal");

for (var i = 0; i < rossi.length; i++) {
    rossi[i].addEventListener("click", function() {
      var imageURL = this.getAttribute("src");
      modale_rossi.setAttribute("src", imageURL);
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






