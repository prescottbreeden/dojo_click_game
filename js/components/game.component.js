class GameComponent {
  constructor() {
    this.enemy = new EnemyComponent('cactuar');
    this.player = new PlayerComponent('Dojoman Sephiroth');
  }

  render() {
    const children = [
      this.enemy,
      this.player
    ];
    return addChildren(section(['game']), children);
  }

  createNewEnemy() {
    this.enemy = new EnemyComponent('atma');
  }

}