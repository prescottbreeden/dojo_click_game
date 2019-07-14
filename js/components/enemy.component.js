class Enemy {
  constructor(monster) {
    this.path = monster;
    this.name = capitalizeWord(this.path);
    this.health = 100;
    this.max_health = 100;
  }

  render() {
    const elements = [
      h('h2', this.name, ['enemy_name']),
      this.enemyImage(),
      this.createStatusBar(),
    ];
    return addChildren(div(['enemy']), elements);
  }

  createStatusBar() {
    const status = new StatusBar(this.health, this.max_health, 'red').render();
    return status;
  }

  enemyImage() {
    const image = img(`./assets/${this.path}.png`, ['enemy__img']);
    image.addEventListener('click', () => {
      this.health -= 10;
      if (this.health <= 0) {
        app.game.player.levelUp();
        if (Math.round(Math.random()) === 0) {
          app.game.enemy = new Enemy('cactuar');
        } else {
          app.game.createNewEnemy();
        }
        // app.game.enemy = new Enemy('cactuar');
      }
      removeChildren(root);
      app.render();
    })
    return image;
  }
}