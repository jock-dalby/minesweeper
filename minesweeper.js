document.addEventListener('DOMContentLoaded', startGame)

var board = {}
generateBoard(36)

function generateBoard (numCells){
  board.cells = [numCells]

  index = 0;
  for (var i = 0; i < Math.sqrt(numCells); i++) {
    for (var j = 0; j < Math.sqrt(numCells); j++) {
      temp = {row: i+1, col: j+1, isMine: false, isMarked: false, hidden: true}
      board.cells[index] = temp;
      index++
    }
  }
  generateMines(numCells)
}

function generateMines(numCells) {
  var minNumMines = Math.sqrt(numCells);
  var maxNumMines = Math.floor(numCells/2);

  numMines = Math.random() * (maxNumMines - minNumMines + 1) + minNumMines;

  for (var x = 0; x < numMines; x++) {
    keepSearching = true;
    while(keepSearching) {
      randCell = Math.floor(Math.random()*numCells)
      if(board.cells[randCell].isMine === false) {
        board.cells[randCell].isMine = true;
        keepSearching = false;
      }
    }
  }
}


function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    document.addEventListener('click', checkForWin);
    document.addEventListener('contextmenu', checkForWin);
  }
  lib.initBoard()
}

function checkForWin () {
  for (var f = 0; f < board.cells.length; f++) {
    if(board.cells[f].isMine && !board.cells[f].isMarked === true){
      return
    }
    if(board.cells[f].hidden === true && board.cells[f].isMine === false){
      return
    }
  }
  lib.displayMessage('You win!')
  resetBoard()
}

function resetBoard() {

  location.reload();
}

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
