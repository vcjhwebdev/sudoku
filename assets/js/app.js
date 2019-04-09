var startGame = document.querySelector('.start-game');
var overlay = document.querySelector('#overlay');
var game = document.querySelector('#game');
var form = document.querySelector('form');


// startGame.addEventListener('click', function(e) {
// overlay.style.display = "none";
// game.style.display = "none";
// });

var seed = [
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

var gameBoard = shuffleBoard(seed);

function shuffleBoard(seed) {

  // parameter: array
  // returns shuffled array
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

  // var firstThreeRows = [seed[0], seed[1], seed[2]];
  //
  // firstThreeRows = shuffleArray(firstThreeRows);
  //
  // seed[0] = firstThreeRows[0];
  //
  //

  var firstThreeRows = shuffleArray([seed[0], seed[1], seed[2]]);
  var secondThreeRows = shuffleArray([seed[3], seed[4], seed[5]]);
  var lastThreeRows = shuffleArray([seed[6], seed[7], seed[8]]);

  var array = [
    firstThreeRows[0],
    firstThreeRows[1],
    firstThreeRows[2],
    secondThreeRows[0],
    secondThreeRows[1],
    secondThreeRows[2],
    lastThreeRows[0],
    lastThreeRows[1],
    lastThreeRows[2]
  ];

  return array;
}

function printGameBoard(array) {
  var table = document.querySelector('table');
  var rows = table.querySelectorAll//('tr');

  for(var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.querySelectorAll('td');
    for(var t = 0; t < cells.length; t++){
      var cell = cells[t];
      // Generate random number
      var r = Math.random();
      if (r > .5) {
        cell.textContent = array[i][t];
      } else {
        cell.textContent = "";
        if(r > .7 ) {
          cell.textContent = array[i][t];
        } else {
          cell.textContent = "";
          if(r > .6 ) {
            cell.textContent = array[i][t];
          } else {
            cell.textContent = "";

        }
      }
    }
  }
}

function compare() {

}

printGameBoard(gameBoard);
form.addEventListener('click', function(e) {
  console.log(e.target);
});
