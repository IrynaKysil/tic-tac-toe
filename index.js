const O_CLASS = "o";
const X_CLASS = "x";
const cells = document.querySelectorAll("[data-cell]");
let oTurn;

cells.forEach(cell => {
  cell.addEventListener("click", onClick, { once: true })
});

function onClick(event) {
  //console.log("The cell is clicked!");
  const cell = event.target;
  const currentClass = oTurn ? O_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  switchTurns();
};

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurns() {
  oTurn = !oTurn;
};