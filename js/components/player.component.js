class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.max_health = 100;
    this.lvl = 1;
  }
  render() {
    const elements = [
      h('h2', this.name, ['player__name']),
      img('./assets/player.png', ['player__img']),
      new StatusBar(this.health, this.max_health, 'green').render(),
    ]
    return addChildren(div(['player']), elements);
  }

  levelUp() {
    this.lvl++;
    this.health += 10;
    this.max_health += 10;
  }
}