const O_CLASS = "o";
const X_CLASS = "x";
const board = document.getElementById("board");
const cells = document.querySelectorAll("[data-cell]");
let oTurn;

startGame();

function startGame() {
  oTurn = false;
  cells.forEach(cell => {
    cell.addEventListener("click", onClick, { once: true })
  });
  setBoardHoverClass();
};

function onClick(event) {
  //console.log("The cell is clicked!");
  const cell = event.target;
  const currentClass = oTurn ? O_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  switchTurns();
  setBoardHoverClass();
};

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurns() {
  oTurn = !oTurn;
};

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(O_CLASS);
  oTurn ? board.classList.add(O_CLASS) : board.classList.add(X_CLASS);
};