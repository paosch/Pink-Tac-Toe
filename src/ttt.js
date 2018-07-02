function Game(){
  this.turn = 0;
  this.scores = [0,0];
}
var game = new Game;

Game.prototype.trackScore = function(playerPoints){
  this.scores[this.turn] += playerPoints;
}
