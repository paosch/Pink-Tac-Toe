function Game(){
  this.players = [];
  this.tokens = ["X", "0"];
  this.turn = 0;
  this.scores = [0,0];
  this.players[0] = "X";
  this.players[1] = "O";
  this.winNumbers = [ 7,56,73,84,146,273,292,448 ]
  this.gameOver = false;
}
var game = new Game;

Game.prototype.trackScore = function(playerPoints){
  this.scores[this.turn] += playerPoints;
}

Game.prototype.switchturn = function(){
  if(this.turn == 0) this.turn = 1;
  else this.turn = 0;
}

Game.prototype.calculatewinner = function(){
  for (var i = 0; i < this.winNumbers.length; i++){
    if((this.winNumbers[i] & this.scores[this.turn]) == this.winNumbers[i]){
      this.gameOver = true;
      var audio = new Audio('applause8.wav');
      audio.play();
      return this.players[this.turn];
    }
  }
}

Game.prototype.play = function(clickedDiv, divPoints){
  if(!this.gameOver){
    clickedDiv.onclick = "";
    game.trackScore(divPoints);
    clickedDiv.innerHTML = "<span>"+ this.tokens[this.turn] +"</span>";
    game.calculatewinner();
    if (!this.gameOver) { game.switchturn(); }
  }
}
