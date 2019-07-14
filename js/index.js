const app = new App();
// testForMemoryLeak();
app.enemyAttackOn(1);


function testForMemoryLeak() {
  const attack = setInterval(function() {
    app.game.player.levelUp();
    if (Math.round(Math.random()) === 0) {
      app.game.enemy = new Enemy('cactuar');
    } else {
      app.game.createNewEnemy();
    }
    removeChildren(root);
    app.render();
    if (app.game.player.health >= 100000) {
      alert('test complete');
      clearTimeout(attack);
    }
  }, 0);
}