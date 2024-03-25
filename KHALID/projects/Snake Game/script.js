let container = document.getElementById("container");
let startBtn = document.getElementById("startBtn");
let title = document.getElementById("title");
let takeControl = document.getElementById("takeControl");
let icons = document.getElementById("icons");
let canvas = document.createElement("canvas");
canvas.style.height = "100%";
canvas.style.width = "100%";
canvas.classList.add("bg-info");
startBtn.addEventListener("click", () => {
title.remove();
takeControl.remove();
icons.remove();
startBtn.remove();
container.append(canvas);
});
// control the snake :
let snake = canvas.getContext("2d");
snake.fillStyle = "red";
let snakeWidth = 5;
let snakeHeight = 5;
let xSnake = centerSnake(canvas.width, snakeWidth);
let ySnake = centerSnake(canvas.height, snakeHeight);

function centerSnake(sizeContainer, size) {
  return (sizeContainer - size) / 2;
}

function rectSnake(x, y) {
  snake.clearRect(0, 0, canvas.width, canvas.height);
  snake.fillRect(x, y, snakeHeight, snakeWidth);
}
rectSnake(xSnake, ySnake);

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (ySnake < 0) {
        ySnake = canvas.height;
      }
      ySnake -= 5;
      break;
    case "ArrowRight":
      if (xSnake > canvas.width) {
        xSnake = 0;
      }
      xSnake += 5;
      break;
    case "ArrowDown":
      if (ySnake > canvas.height) {
        ySnake = 0;
      }
      ySnake += 5;

      break;
    case "ArrowLeft":
      if (xSnake < 0) {
        xSnake = canvas.width;
      }
      xSnake -= 5;
      break;
    default:
      break;
  }
  rectSnake(xSnake, ySnake);
});
