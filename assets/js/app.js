var startGame = document.querySelector('.start-game');
var overlay = document.querySelector('#overlay');
var game = document.querySelector('#game');

// startGame.addEventListener('click', function(e) {
// overlay.style.display = "none";
// game.style.display = "none";
// });

var board = [
  [7, 3, 5, 6, 1, 4, 8, 9, 2],
  [8, 4, 2, 9, 7, 3, 5, 6, 1],
  [9, 6, 1, 2, 8, 5, 3, 7, 4],
  [2, 8, 6, 3, 4, 9, 1, 5, 7],
  [4, 1, 3, 8, 5, 7, 9, 2, 6],
  [5, 7, 9, 1, 2, 6, 4, 3, 8],
  [1, 5, 7, 4, 9, 2, 6, 8, 3],
  [6, 9, 4, 7, 3, 8, 2, 1, 5],
  [3, 2, 8, 5, 6, 1, 7, 4, 9]
];

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function shuffleBoard(board) {
  var firstThreeRows = [board[0], board[1], board[2]];

  firstThreeRows = shuffleArray(firstThreeRows);

  board[0] = firstThreeRows[0];
}

console.log(board);
shuffleBoard(board);

  var secondThreeRows = [board[3], board[4], board[5]];

  secondThreeRows = shuffleArray(secondThreeRows);

  board[0] = secondThreeRows[0];

console.log(board);
shuffleBoard(board);


  var thirdThreeRows = [board[6], board[7], board[8]];

  thirdThreeRows = shuffleArray(thirdThreeRows);

  board[0]= thirdThreeRows

console.log(board);
shuffleBoard(board);
