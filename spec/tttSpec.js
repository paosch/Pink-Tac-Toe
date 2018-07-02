describe('Game', function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("tracks a player's score", function(){
    game.scores[0] = 1;
    game.trackScore(3);
   expect(game.scores[0]).toEqual(4);
  });

  it('allows people to change turns', function(){
    game.turn == 0;
    game.switchturn();
    game.switchturn();
    expect(game.turn).toEqual(0);
  });
  

});
