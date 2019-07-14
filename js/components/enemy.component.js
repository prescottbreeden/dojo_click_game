class EnemyComponent extends NpcComponent {
  constructor(monster, lvl = 1) {
    super(lvl);
    this.path = monster;
    this.name = capitalizeWord(this.path);
    this.strength = lvl;
  }

  render() {
    const elements = [
      h('h2', this.name, ['enemy_name']),
      this.enemyImage(),
      new StatusBarComponent(this.health, this.max_health, 'red'),
    ];
    return addChildren(div(['enemy']), elements);
  }

  enemyImage() {
    const image = img(`./assets/${this.path}.png`, ['enemy__img']);
    image.addEventListener('click', () => {
      this.health -= app.game.player.strength;
      if (this.health <= 0) {
        app.game.player.levelUp();
        if (Math.round(Math.random()) === 0) {
          app.game.enemy = new EnemyComponent('cactuar', ++this.lvl);
        } else {
          app.game.enemy = new EnemyComponent('atma', ++this.lvl);
        }
        // app.game.enemy = new Enemy('cactuar');
      }
      removeChildren(root);
      app.render();
    })
    return image;
  }
}