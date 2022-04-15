function openNav(){
    document.getElementById("sidebar").style.width = "30%";
    document.getElementById("main").style.marginLeft ="30%";

}

function closeNav(){
    document.getElementById(`sidebar`).style.width = `0%`;
    document.getElementById(`main`).style.marginLeft = `0%`;
}

// fungsi dropdown 1

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//   fungsi dropdown 2

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn.')) {
      var dropdowns = document.getElementsByClassName("dropdown-time");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }