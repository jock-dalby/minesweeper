document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells: [
    {
    row: 1,
    col: 1,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 1,
    col: 2,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 1,
    col: 3,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 1,
    col: 4,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 1,
    col: 5,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 1,
    col: 6,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 2,
    col: 1,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 2,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 2,
    col: 3,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 2,
    col: 4,
    isMine: true,
    isMarked: false,
    hidden: true,
    // surroundingMines:
  },
  {
    row: 2,
    col: 5,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 2,
    col: 6,
    isMine: false,
    isMarked: false,
    hidden: true,
    // surroundingMines:
  },
  {
    row: 3,
    col: 1,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 3,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 3,
    col: 3,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 3,
    col: 4,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 3,
    col: 5,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 3,
    col: 6,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 4,
    col: 1,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 4,
    col: 2,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 4,
    col: 3,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 4,
    col: 4,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 4,
    col: 5,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 4,
    col: 6,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 5,
    col: 1,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 5,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
    // surroundingMines:
  },
  {
    row: 5,
    col: 3,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 5,
    col: 4,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 5,
    col: 5,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 5,
    col: 6,
    isMine: false,
    isMarked: false,
    hidden: true,
    // surroundingMines:
  },
  {
    row: 6,
    col: 1,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 6,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 6,
    col: 3,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 6,
    col: 4,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 6,
    col: 5,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 6,
    col: 6,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  }
]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
    var result = countSurroundingMines(board.cells[i]);
    board.cells[i].surroundingMines = result;
    console.log(board.cells[i].surroundingMines);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0;
  var surroundingCells = [lib.getSurroundingCells(cell.row, cell.col)];
  for (var i = 0; i < surroundingCells.length; i++) {
    for (var j = 0; j <surroundingCells[i].length; j++)  {
    if(surroundingCells[i][j].isMine == true) {
      count++;
    } else {
      count = count;
    }
}
}
return count;
}
