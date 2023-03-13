var game = {
  gameboard: [2, 2, 2, 2, 2, 2, 2, 2, 2],
  turnX: false,
};

function render() {
  const gridContainer = document.createElement("div");
  const ticTacToeGrid = document.createElement("div");
  gridContainer.classList.add("gridContainer");
  gridContainer.setAttribute("id", "gridContainer");
  ticTacToeGrid.classList.add("ticTacToeGrid");
  gridContainer.appendChild(ticTacToeGrid);
  document.body.appendChild(gridContainer);

  for (let i = 0; i < 9; i++) {
    const gridItem = document.createElement("div");
    gridItem.addEventListener("click", (event) => {
      clickOnSquare(i);
      console.log("working");
    });
    gridItem.classList.add("gridSquare");
    gridItem.setAttribute("id", `${i}`);
    ticTacToeGrid.appendChild(gridItem);
  }
}

function clickOnSquare(i) {
  if (game.gameboard[i] != 2) {
    return;
  }
  if (game.turnX == true) {
    game.gameboard[i] = 1;
  } else {
    game.gameboard[i] = 0;
  }
  game.turnX = !game.turnX;
  refresh();
  checkWin();
}

function initialGrid() {}

function refresh() {
  for (let i = 0; i < game.gameboard.length; i++) {
    let currentGrid = document.getElementById(i);
    if (game.gameboard[i] == 0) {
      currentGrid.innerText = "0";
    } else if (game.gameboard[i] == 1) {
      currentGrid.innerText = "X";
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 5, 7],
    [2, 5, 8],
  ];

  checkWinningCombos(winningCombos);
}

function checkWinningCombos(winningCombos) {
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    let match = false;
    let pieces = [];
    for (let j = 0; j < combo.length; j++) {
      // gets the winning combo arrays element to reference the correct index
      // in the gameboard array
      let piece = game.gameboard[combo[j]];
      // checks to see if if current pieces is a blank square and skips it if
      // it is
      if (piece === 2) {
        break;
      }
      // if it isnt 2 it pushes the current element from the combo array into the
      // pieces array
      pieces.push(piece);
    }
    // 1 line if statement. If the the current combo has pushed its 3 elements to
    // the pieces array it checks to see if they all match. If they dont it returns
    // false and goes to the next combo.
    if (pieces.length === 3) match = pieces.every((i) => i == pieces[0]);
    if (match) {
      console.log("someone won");
      someoneWon();
      return true;
    }
  }
  return false;
}

function someoneWon() {
  if (game.turnX === true) {
    alert("O has won!");
  } else {
    alert("X has won!");
  }
}

// function checkWinningCombos(winningCombos) {
//   for (let i = 0; i < winningCombos.length; i++) {
//     const combo = winningCombos[i];
//     let match;
//     let previous;
//     for (let j = 0; j < combo.length; j++) {
//       if (game.gameboard[combo[j]] === 2) {
//         match = false;
//         break;
//       }
//       // if (game.gameboard[combo[j]] != 2) {
//       if (game.gameboard[combo[j]] === 1) {
//         match = true;
//         console.log(match);
//       } else if (game.gameboard[combo[j]] === 0) {
//         match = true;
//         console.log(match);
//       }
//     }
//     if (match) {
//       console.log("someone won");
//       return true;
//     }
//   }
//   return false;
// }

function main() {
  render();
}

main();
