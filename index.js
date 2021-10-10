const O_CLASS = "o";
const X_CLASS = "x";
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
const winningMessageText = document.querySelector("[data-winning-msg-text]");

const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMsg");
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

  if (checkWin(currentClass)) {
    //console.log("Winner!");
    endGame(false);
  } else if (isDraw()) {
    endGame(true)
  } else {
    switchTurns();
    setBoardHoverClass();
  }  
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

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass)
    })
  })
};

function endGame(draw) {
  if (draw) {
    winningMessageElement.innerText = "Draw!"
  } else {
    winningMessageText.innerText = `${oTurn ? "O's Wins!" : "X's Wins!"}`;
  }
  winningMessageElement.classList.add("show");
};

function isDraw() {
  return [...cells].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
  })
};