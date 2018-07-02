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

});
