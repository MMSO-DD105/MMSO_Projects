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
  const lignePossible = {
    ligne012:
      listSmallBoxes[0].textContent +
      listSmallBoxes[1].textContent +
      listSmallBoxes[2].textContent,
    ligne345:
      listSmallBoxes[3].textContent +
      listSmallBoxes[4].textContent +
      listSmallBoxes[5].textContent,
    ligne678:
      listSmallBoxes[6].textContent +
      listSmallBoxes[7].textContent +
      listSmallBoxes[8].textContent,
    ligne036:
      listSmallBoxes[0].textContent +
      listSmallBoxes[3].textContent +
      listSmallBoxes[6].textContent,
    ligne147:
      listSmallBoxes[1].textContent +
      listSmallBoxes[4].textContent +
      listSmallBoxes[7].textContent,
    ligne258:
      listSmallBoxes[2].textContent +
      listSmallBoxes[5].textContent +
      listSmallBoxes[8].textContent,
    ligne246:
      listSmallBoxes[2].textContent +
      listSmallBoxes[4].textContent +
      listSmallBoxes[6].textContent,
    ligne048:
      listSmallBoxes[0].textContent +
      listSmallBoxes[4].textContent +
      listSmallBoxes[8].textContent,
  };
  const ligneChecked = Object.keys(lignePossible).filter(
    (value) =>
      lignePossible[value].length === 2 &&
      lignePossible[value][0] === lignePossible[value][1]
  );
  console.log(ligneChecked);
  if (ligneChecked.length >= 1) {
    const indexBoxesInLigne = parseInt(
      ligneChecked[0].split("").reverse().join("")
    )
      .toString()
      .split("")
      .map((num) => parseInt(num));

    element = indexBoxesInLigne.find(
      (value) => listSmallBoxes[value].textContent === ""
    );
    console.log(indexBoxesInLigne);
    console.log(element);
    listSmallBoxes[element].textContent = turn[countToChangeTurn];
  } else {
    if (listSmallBoxes[4].textContent === "") {
      listSmallBoxes[4].textContent = turn[countToChangeTurn];
    } else {
      let EmtyBoxes = listSmallBoxes.filter((item) => item.textContent === "");
      EmtyBoxes[Math.floor(Math.random() * EmtyBoxes.length)].textContent =
        turn[countToChangeTurn];
    }
  }
  //////////////////////
  itsUrTurnComputer();
};
// khsso i chof OO hiya lwla 3d XX 08H25 25/03/224 bug in 0 + 2 + 3 mkibich irbah
