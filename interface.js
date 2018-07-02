function Interface(Game){
  this.game = Game;
}

Interface.prototype.switchturn = function(){
  this.game.switchturn();
  document.getElementById("intro").innerText = this.game.players[this.game.turn] + "'s Turn";
}

Interface.prototype.calculatewinner = function(){
  this.game.calculatewinner();
  document.getElementById("intro").innerText = this.game.players[this.game.turn] + " wins!";
}
