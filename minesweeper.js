document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
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

// var board = {
//   cells: [
//     {
//     row: 1,
//     col: 1,
//     isMine: true,
//     isMarked: false,
//     hidden: true
//   },
//   {
//     row: 1,
//     col: 2,
//     isMine: true,
//     isMarked: false,
//     hidden: true
//   },
//   {
//     row: 1,
//     col: 3,
//     isMine: false,
//     isMarked: false,
//     hidden: true
//   }
// ]
// }

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    document.addEventListener('click', checkForWin);
    document.addEventListener('contextmenu', checkForWin);
  }
  lib.initBoard()
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

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
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
    console.log("Time delay remaining:", ms - new Date());
  }
    var notSure = true
    while (notSure) {
      var playAgain = prompt("Would you like to play again? Type 'yes' or 'no'")
      if (playAgain.toUpperCase() === 'NO') {
        alert("Thanks, see you next time!")
        return
        }
      if (playAgain.toUpperCase() !== 'YES') {
        alert("Sorry, I did not recognise your answer, please try again typing either 'yes' or 'no'.")
        }
      if (playAgain.toUpperCase() === 'YES') {
      notSure = false
      }
    }
  alert("OK, here we go!")
  location.reload();
  }


// function checkForWin () {
//   var count = 0;
//   for (var i = 0; i < board.cells.length; i++){
//     console.log(board.cells[i].hidden)
//     if(board.cells[i].isMine){
//       if(board.cells[i].isMarked){
//         count++;
//       } else {
//         count = count;
//       }
//     } else {
//       if (board.cells[i].isMarked === false && board.cells[i].hidden === false) {
//         count++;
//       } else {
//         count = count;
//       }
//     }
//   }
//
//   console.log(count)
//
//   if (count === (board.cells.length)) {
//     return lib.displayMessage('You win!')
//   } else {
//     return false;
//   }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


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
