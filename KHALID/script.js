let btnMenu = document.getElementById("btnMenu");
let aside = document.getElementsByTagName("aside");
let btncloseAside = document.getElementById("btncloseAside");
console.log(aside[0].style);
btnMenu.addEventListener("click", (e) => {
  e.preventDefault();
  aside[0].style.display = "inline-block";
});
btncloseAside.addEventListener("click", (e) => {
  e.preventDefault();
  aside[0].style.display = "none";
});
window.addEventListener("resize", (e) => {
  e.preventDefault();
  let width = window.innerWidth;
  if (width > 1100){
    aside[0].style.display = "inline-block";
  }
});