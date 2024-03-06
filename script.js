let elemstn = document.body.children;
let contactUs = document.getElementById("contactUs");
let linkContactUs = document.getElementById("linkContactUs");
let btnClose2 = document.getElementById("btnClose2");

//------------on click contact US------------
linkContactUs.addEventListener("click", () => {
  contactUs.classList.remove("d-none");
  contactUs.style.zIndex = "999";
  for (let k = 2; k <= elemstn.length; k++) {
    elemstn[k].classList.add("blur");
  }
});
btnClose2.addEventListener("click", () => {
  contactUs.classList.add("d-none");
  for (let i = 2; i <= elemstn.length; i++) {
    elemstn[i].classList.remove("blur");
  }
});
// _______________________________________________________
// New About Us
document.getElementsByClassName("tablink")[0].click();

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
// New ContactUs
document.getElementsByClassName("tablink")[0].click();

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