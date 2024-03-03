document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  let container = document.createElement("div");
  container.classList.add("bg-info-subtle");
  container.classList.add("w-75");
  container.classList.add("h-75");
  container.classList.add("d-flex");
  container.classList.add("justify-content-center");
  container.classList.add("gap-1");
  container.classList.add("p-1");
  document.body.append(container);
  let div = document.createElement("div");
  div.style.width = "10px";
  div.style.height = "50%";
  div.classList.add("bg-warning");
  container.append(div);
  let containerRect = container.getBoundingClientRect();
  let divRect = div.getBoundingClientRect();
  let numberDivInside = containerRect.width / divRect.width;
  numberDivInside = Math.floor(numberDivInside);
  let listDivs = new Array(numberDivInside);
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
  const heights = [
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
  ];

  function randomIndex(len) {
    let randomIndex = Math.floor(Math.random() * len);
    return randomIndex;
  }
  for (let i = 0; i < numberDivInside; i++) {
    listDivs[i] = document.createElement("div");
    listDivs[i].style.width = divRect.width + "px";
    listDivs[i].style.height = heights[randomIndex(heights.length)];
    listDivs[i].classList = "border";
    listDivs[i].classList.add(bgColors[randomIndex(bgColors.length)]);
    setTimeout(() => {
      container.append(listDivs[i]);
    }, 100 * i);
  }
});
