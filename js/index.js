const app = new App();
app.enemyAttackOn(1);
// testForMemoryLeak();


function testForMemoryLeak() {
  const click = new Event('click');
  const attack = setInterval(function() {
    document.getElementsByClassName('enemy__img')[0].dispatchEvent(click);
    if (app.game.player.health >= 100000) {
      alert('test complete');
      clearTimeout(attack);
    }
  }, 0);
}