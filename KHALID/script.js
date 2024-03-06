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
  if (width > 1100) {
    aside[0].style.display = "inline-block";
  }
});

const userName = "MMSO-DD105";
const reposName = "MMSO_Projects";
const listOwners = ["KHALID", "ANAS", "ZAKARIA", "MOHAMED"];
const apiUrl = `https://api.github.com/repos/${userName}/${reposName}/contents/${listOwners[0]}/projects`;
const mainList = document.getElementsByTagName("main");
const main = mainList[0];
function removeFromString(string, character) {
  let startIndex = string.indexOf(character);
  return string.substring(startIndex + 1);
}

let promise = fetch(apiUrl); // fetch function return a promise

promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      let urlForlder = apiUrl + "/" + element.name;
      console.log(urlForlder);
      fetch(urlForlder)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let cardPaths = {
            btnHref: "",
            imgSrc: "",
            contentDescription: "",
            stylePath: "",
            scriptPath: "",
          };
          console.log(cardPaths);
          for (let i = 0; i < data.length; i++) {
            if (data[i].name === "index.html") {
              let PathFromDeroctry = data[i].path;
              cardPaths.btnHref = removeFromString(PathFromDeroctry, "/");
            } else if (data[i].name === "script.js") {
              cardPaths.scriptPath = data[i].path;
            } else if (data[i].name === "style.css") {
              cardPaths.stylePath = data[i].path;
            } else if (data[i].name === "description.txt") {
              cardPaths.contentDescription = data[i].path;
            } else {
              let PathFromDeroctry = data[i].path;
              cardPaths.imgSrc = removeFromString(PathFromDeroctry, "/");
            }
          }
          console.log(cardPaths);
          let card = document.createElement("div");
          card.classList.add("card", "text-center", "col-3");
          let imageCard = document.createElement("img");
          imageCard.setAttribute("src", cardPaths.imgSrc);
          imageCard.classList.add("card-img-top");
          let cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          let cardTitle = document.createElement("h6");
          cardTitle.classList.add("card-title");
          let cardText = document.createElement("p");
          cardText.classList.add("card-text");
          cardText.innerHTML =
            "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ";
          let btnCard = document.createElement("a");
          btnCard.setAttribute("href", cardPaths.btnHref);
          btnCard.classList.add("btn", "btn-primary", "w-75", "h-25", "fs-6");
          cardBody.append(cardTitle);
          cardBody.append(cardText);
          cardBody.append(btnCard);
          card.append(imageCard);
          card.append(cardBody);
          main.append(card);
        })
        .catch((error) => {
          console.log(
            "There was a problem with your fetch operation ---> ",
            error
          );
        });
    });
  })
  .catch((error) => {
    console.log("There was a problem with your fetch operation ---> ", error);
  });
