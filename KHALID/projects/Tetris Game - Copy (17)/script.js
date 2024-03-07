let parent = document.getElementById("parent");
let firstChild = document.getElementById("firstChild");
let secondChild = document.getElementById("secondChild");
let randomIndexLeft;
let randomIndexBg;
let firstBg;
let lastBg;
count = 0;
let listLeft = ["0%", "25%", "50%", "75%"];
let listBg = [
  "bg-primary",
  "bg-warning",
  "bg-dark",
  "bg-info",
  "bg-success",
  "bg-secondary",
  "bg-danger",
];
function getRandomLeft() {
  randomIndexLeft = Math.floor(Math.random() * listLeft.length);
  return listLeft[randomIndexLeft];
}
function getRandomBg() {
  randomIndexBg = Math.floor(Math.random() * listBg.length); // Math.floor return an int ex 5.05 return 5 or 5.95 return 5 or -5.05 return -6
  // Math.random return a randomly float from 0 to 1
  return listBg[randomIndexBg];
}
let checkInterval = setInterval(() => {
  count++;
  if (count === 1) {
    firstBg = getRandomBg();
    firstChild.className = firstChild.className.replace("bg-warning", firstBg);
  } else {
    lastBg = getRandomBg();
    firstChild.className = firstChild.className.replace(firstBg, lastBg);
    firstBg = lastBg;
  }
  firstChild.style.left = getRandomLeft();
  checkInterval2Function();
}, 2000); // setInerval call a function evry 2s in this case

let listStr;
let valueStr;
let secondChildRect = secondChild.getBoundingClientRect();
document.addEventListener("keyup", (event) => {
  if (secondChild.style.left === "") {
    listStr = "00%";
  }
  if (event.key === "ArrowRight") {
    if (listStr === "75%") {
      return;
    }
    secondChildRect.x += secondChildRect.width;
    valueStr = listStr[0] + listStr[1];
    valueStr = Number(valueStr);
    valueStr += 25;
    valueStr += "%";
    listStr = valueStr;
    secondChild.style.left = listStr;
  } else if (event.key === "ArrowLeft") {
    if (listStr === "00%") {
      return;
    }
    secondChildRect.x -= secondChildRect.width;
    valueStr = listStr[0] + listStr[1];
    valueStr = Number(valueStr);
    valueStr -= 25;
    if (valueStr === 0) {
      valueStr += "0%";
      listStr = valueStr;
      secondChild.style.left = listStr;
    } else {
      valueStr += "%";
      listStr = valueStr;
      secondChild.style.left = listStr;
    }
  }
});
let point = 0;
function checkInterval2Function() {
  let checkIntervel2 = setInterval(() => {
    let firstChildRect = firstChild.getBoundingClientRect();
    let points = document.getElementById("points");
    if (secondChildRect.x === firstChildRect.x && firstChildRect.y > 310) {
      point++;
      points.innerHTML = point + " Points";
      clearInterval(checkIntervel2);
    }
  }, 100);
}
