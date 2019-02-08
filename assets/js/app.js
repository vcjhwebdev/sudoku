var startGame = document.querySelector('.start-game');
var overlay = document.querySelector('#overlay');
var game = document.querySelector('#game');

startGame.addEventListener('click', function(e) {
overlay.style.display = "none";
game.style.display = "none";
});
