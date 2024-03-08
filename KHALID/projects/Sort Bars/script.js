document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  // list of bg of bootstrap for random bg:
  const bgColors = [
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-light",
    "bg-dark",
    "bg-white",
  ];
  // function gives random index to a list :
  function randomIndex(len) {
    let randomIndex = Math.floor(Math.random() * len);
    return randomIndex;
  }
  // create container and style it :
  let container = document.createElement("div");
  container.classList.add("bg-info-subtle");
  container.classList.add("w-75");
  container.classList.add("h-75");
  container.classList.add("d-flex");
  container.classList.add("justify-content-center");
  container.classList.add("gap-1");
  container.classList.add("p-1");
  document.body.append(container);
  // create the reference of the divs and style it:
  let div = document.createElement("div");
  div.style.width = "10px";
  div.classList.add("border");
  div.style.height = Math.floor(Math.random() * 100) + "%";
  div.classList.add(bgColors[randomIndex(bgColors.length)]);
  container.append(div);
  // get the sizes of the container and the div :
  let containerRect = container.getBoundingClientRect();
  let divRect = div.getBoundingClientRect();
  // get the number should be inside the container :
  let numberDivInside = containerRect.width / divRect.width;
  numberDivInside = Math.floor(numberDivInside);
  // create the list of divs should be , but with empty places :
  let listDivs = new Array(numberDivInside);
  // create the other divs with a random height and bg :
  for (let i = 0; i < numberDivInside; i++) {
    listDivs[i] = document.createElement("div");
    listDivs[i].style.width = divRect.width + "px";
    listDivs[i].style.height = Math.floor(Math.random() * 100) + "%";
    listDivs[i].classList.add("border");
    listDivs[i].classList.add(bgColors[randomIndex(bgColors.length)]);
    setTimeout(() => {
      container.append(listDivs[i]);
    }, 50 * i);
  }
  let buttonAsc = document.createElement("a");
  buttonAsc.setAttribute("href", "#");
  buttonAsc.textContent = "Asc";
  buttonAsc.classList.add("btn");
  buttonAsc.classList.add("btn-success");
  document.body.append(buttonAsc);
  let buttonDesc = document.createElement("a");
  buttonDesc.setAttribute("href", "#");
  buttonDesc.textContent = "Desc";
  buttonDesc.classList.add("btn");
  buttonDesc.classList.add("btn-warning");
  document.body.append(buttonDesc);
  buttonAsc.addEventListener("click", (e) => {
    e.preventDefault();
    let containerChildren = Array.from(container.children);
    containerChildren.sort((element, element1) => {
      return element.clientHeight - element1.clientHeight;
    });
    container.innerHTML = "";
    containerChildren.map((element, index, array) => {
      setTimeout(() => {
        container.append(element);
      }, 50 * index);
    });
  });
  buttonDesc.addEventListener("click", (e) => {
    e.preventDefault();
    let containerChildren = Array.from(container.children);
    containerChildren.sort((element, element1) => {
      return -element.clientHeight + element1.clientHeight;
    });
    container.innerHTML = "";
    containerChildren.map((element, index, array) => {
      setTimeout(() => {
        container.append(element);
      }, 50 * index);
    });
  });
});
