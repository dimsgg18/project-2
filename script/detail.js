// modal 1
function editBook() {

let modal = document.getElementById("myModal");

let btn = document.getElementById("editBook");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}


// modal 2
function deleteBook() {

    let modal = document.getElementById("myModal2");
    
    let btn = document.getElementById("deleteBook");
    
    let span = document.getElementsByClassName("close2")[0];
    
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    }