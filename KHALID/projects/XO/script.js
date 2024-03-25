// User Computer Move X or O :
let countToChangeTurn = 0;
function changeCount() {
  // change X to Y and Y to X every time function called
  if (countToChangeTurn === 0) {
    return (countToChangeTurn = 1);
  } else if (countToChangeTurn === 1) {
    return (countToChangeTurn = 0);
  }
}
let countToMakeComputerPlay = 1;
const turn = ["X", "O"];
function userMove(event) {
  const elementClicked = event.target;
  if (elementClicked.textContent !== "") {
    // don't allow the user to change a box if already checked
    elementClicked.style.backgroundColor = "red";
    return setTimeout(
      () => (elementClicked.style.backgroundColor = "white"),
      100
    );
  }
  elementClicked.textContent = turn[countToChangeTurn];
  itsUrTurnComputer();
  changeCount();
}

// test userMove() :
const listSmallBoxes = Array.from(
  document.getElementsByClassName("boxMother")[0].children
); // must use Arrayfrom to convert html collection to array or use a normal boucle for or use ... just one from those;
listSmallBoxes.forEach((element) => {
  // apply the function on all small Boxes
  element.addEventListener("click", (event) => userMove(event));
});

// let's Learn Computer How to Play :
function itsUrTurnComputer() {
  countToMakeComputerPlay++;
  if (countToMakeComputerPlay % 2 !== 0) {
    return null;
  }
  computerBrain();
}
// Computer Brain :
const computerBrain = () => {
  changeCount();
  // Code of Brain : ///////////////////
  let element;
    
  element.textContent = turn[countToChangeTurn];
  //////////////////////
  itsUrTurnComputer();
};
