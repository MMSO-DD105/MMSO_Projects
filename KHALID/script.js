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