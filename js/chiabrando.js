var modale = document.getElementById("myModal-2");
var modale_chiabrando= document.getElementById("modalImage-2");
var chiabrando = document.getElementsByClassName("chiabrando");
var close = document.getElementById("closeModal-2");

for (var i = 0; i < chiabrando.length; i++) {
    chiabrando[i].addEventListener("click", function() {
      var imageURL = this.getAttribute("src");
      modale_chiabrando.setAttribute("src", imageURL);
      modale.style.display = "block";
    });
}

close.addEventListener("click", function() {
    modale.style.display = "none";
  });
  
window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modale.style.display = "none";
    }
});