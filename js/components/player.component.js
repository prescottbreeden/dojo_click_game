class PlayerComponent extends NpcComponent {
  constructor(name, lvl = 1) {
    super(lvl);
    this.name = name;
    this.strength = lvl * 5;
  }

  render() {
    const elements = [
      h('h2', this.name, ['player__name']),
      img('./assets/player.png', ['player__img']),
      new StatusBarComponent(this.health, this.max_health, 'green'),
    ]
    return addChildren(div(['player']), elements);
  }

  attack(hp) {
    return hp -= this.strength;
  }

  levelUp() {
    this.lvl++;
    this.health += 10;
    this.max_health += 10;
    this.strength += 5;
  }
}