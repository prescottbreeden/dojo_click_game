class App {
  constructor() {
    this.header = new HeaderComponent();
    this.game = new GameComponent();
    this.render();
  }

  render() {
    const elements = [
      this.header,
      this.game
    ]
    addChildren(root, elements);
  }

  enemyAttackOn(seconds) {
    const attack = setInterval(function () {
      removeChildren(root);
      app.render();
      app.game.player.health -= app.game.enemy.strength;
      if (app.game.player.health <= 0) {
        const message = `
        Womp Wooomp... You Ded...
        Total Points: ${app.game.enemy.max_health} points.
        Click Faster!
        `;
        alert(message);
        clearTimeout(attack);
        location.reload();
      }
    }, seconds * 1000);
  }
}