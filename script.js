let elemstn = document.body.children;

// New About Us
function openparagraph(evt, parName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("paragraph");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(parName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}

document.getElementById("linkAboutUs").addEventListener("click", () => {
  document.getElementsByClassName("tablink")[0].click();
});

document.getElementById("linkContactUs").addEventListener("click", () => {
  document.getElementsByClassName("tablink")[2].click();
});
